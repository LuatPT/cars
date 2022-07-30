from importlib.metadata import metadata

from db.database import Database
from fastapi import APIRouter
from models.models import Brand
from models.request import BrandRequest, BrandUpdateRequest
from models.response import Response
from sqlalchemy import and_, desc

# APIRouter creates path operations for brand module
router = APIRouter(
    prefix="/brand",
    tags=["Brand"],
    responses={404: {"description": "Not found"}},
)

database = Database()
engine = database.get_db_connection()


@router.post("/add", response_description="Brand data added into the database")
async def add_brand(brand_req: BrandRequest):
    new_brand = Brand()
    new_brand.name = brand_req.name
    new_brand.logo = brand_req.logo
    new_brand.description = brand_req.description
    new_brand.status = brand_req.status
    new_brand.created_by = brand_req.created_by
    new_brand_id = None
    session = database.get_db_session(engine)
    session.add(new_brand)
    session.flush()
    # get id of the inserted brand
    session.refresh(new_brand, attribute_names=['id'])
    data = {"brand_id": new_brand.id}
    session.commit()
    session.close()
    return Response(data, 200, "Brand added successfully.", False)


@router.put("/update")
async def update_brand(brand_update_req: BrandUpdateRequest):
    brand_id = brand_update_req.brand_id
    session = database.get_db_session(engine)
    try:
        is_brand_updated = session.query(Brand).filter(Brand.id == brand_id).update({
            Brand.name: brand_update_req.name, Brand.logo: brand_update_req.logo,
            Brand.description: brand_update_req.description,
            Brand.status: brand_update_req.status,
            Brand.updated_by: brand_update_req.updated_by
        }, synchronize_session=False)
        session.flush()
        session.commit()
        response_msg = "Brand updated successfully"
        response_code = 200
        error = False
        if is_brand_updated == 1:
            # After successful update, retrieve updated data from db
            data = session.query(Brand).filter(
                Brand.id == brand_id).one()

        elif is_brand_updated == 0:
            response_msg = "Brand not updated. No brand found with this id :" + \
                str(brand_id)
            error = True
            data = None
        return Response(data, response_code, response_msg, error)
    except Exception as ex:
        print("Error : ", ex)


@router.delete("/{brand_id}/delete")
async def delete_brand(brand_id: str):
    session = database.get_db_session(engine)
    try:
        is_brand_updated = session.query(Brand).filter(and_(Brand.id == brand_id, Brand.deleted == False)).update({
            Brand.deleted: True}, synchronize_session=False)
        session.flush()
        session.commit()
        response_msg = "Brand deleted successfully"
        response_code = 200
        error = False
        data = {"brand_id": brand_id}
        if is_brand_updated == 0:
            response_msg = "Brand not deleted. No brand found with this id :" + \
                str(brand_id)
            error = True
            data = None
        return Response(data, response_code, response_msg, error)
    except Exception as ex:
        print("Error : ", ex)


@router.get("/{brand_id}")
async def read_brand(brand_id: str):
    session = database.get_db_session(engine)
    response_message = "Brand retrieved successfully"
    data = None
    try:
        data = session.query(Brand).filter(
            and_(Brand.id == brand_id, Brand.deleted == False)).one()
    except Exception as ex:
        print("Error", ex)
        response_message = "Brand Not found"
    error = False
    return Response(data, 200, response_message, error)


@router.get("/")
async def read_all_brands(created_by: str, page_size: int, page: int):
    session = database.get_db_session(engine)
    data = session.query(Brand).filter(and_(Brand.created_by == created_by, Brand.deleted == False)).order_by(
        desc(Brand.created_at)).limit(page_size).offset((page-1)*page_size).all()
    return Response(data, 200, "Brands retrieved successfully.", False)
