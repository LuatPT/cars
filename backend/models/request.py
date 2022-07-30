from typing import Optional

from pydantic import BaseModel, EmailStr, Field


class ProductRequest(BaseModel):
    name: str = Field(
        None, title="Product Name", max_length=500
    )
    image: str = Field(
        None, title="Image", max_length=500
    )
    brand_id: int = Field(
        None, title="Brand"
    )
    price: float = Field(..., gt=0,
                         description="Price of the product")
    is_available: bool = Field(
        False, description="Value must be either True or False")
    created_by: int = Field(None, title="User Id")


class ProductUpdateRequest(BaseModel):
    product_id: int
    name: str = Field(
        None, title="Product Name", max_length=500
    )
    mage: str = Field(
        None, title="Image", max_length=500
    )
    brand_id: int = Field(
        None, title="Brand"
    )
    price: float = Field(..., gt=0,
                         description="The price must be greater than zero")
    is_available: bool = Field(
        False, description="Value must be either True or False")
    updated_by: int = Field(None, title="Updater Id")


class BrandRequest(BaseModel):
    name: str = Field(
        None, title="Brand Name", max_length=500
    )
    logo: str = Field(
        None, title="Logo", max_length=500
    )
    description: str = Field(
        None, title="Description", max_length=500
    )
    status: bool = Field(
        False, description="Value must be either True or False")
    created_by: int = Field(None, title="User Id")


class BrandUpdateRequest(BaseModel):
    brand_id: int
    name: str = Field(
        None, title="Brand Name", max_length=500
    )
    logo: str = Field(
        None, title="Logo", max_length=500
    )
    description: str = Field(
        None, title="Description", max_length=500
    )
    status: bool = Field(
        False, description="Value must be either True or False")
    updated_by: int = Field(None, title="Updater Id")
