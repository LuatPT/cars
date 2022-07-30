from endpoints import carBranch, carProduct
from fastapi import APIRouter

router = APIRouter()
router.include_router(carProduct.router)
router.include_router(carBranch.router)
