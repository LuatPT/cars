from db.database import Database
from sqlalchemy import (BIGINT, BOOLEAN, INTEGER, TIMESTAMP, Column,
                        ForeignKey, String, text)
from sqlalchemy.ext.declarative import declarative_base

Base = declarative_base()
database = Database()
engine = database.get_db_connection()


class Product(Base):
    __tablename__ = "product"
    id = Column(INTEGER, primary_key=True)
    name = Column(String(512), nullable=False)
    image = Column(String(512), nullable=True)
    brand_id = Column(INTEGER, ForeignKey("brand.id"))
    price = Column(BIGINT)
    is_available = (Column(BOOLEAN, default=True))
    deleted = (Column(BOOLEAN, default=False))
    created_by = Column(INTEGER, nullable=True)
    created_at = Column(TIMESTAMP, nullable=False,
                        server_default=text("now()"))
    updated_by = Column(INTEGER, nullable=True)
    updated_at = Column(TIMESTAMP, nullable=True,
                        server_default=text("now()"))


class Brand(Base):
    __tablename__ = "brand"
    id = Column(INTEGER, primary_key=True)
    name = Column(String(512), nullable=False)
    logo = Column(String(512), nullable=True)
    description = Column(String(512), nullable=True)
    deleted = (Column(BOOLEAN, default=False))
    status = (Column(BOOLEAN, default=False))
    created_by = Column(INTEGER, nullable=True)
    created_at = Column(TIMESTAMP, nullable=False,
                        server_default=text("now()"))
    updated_by = Column(INTEGER, nullable=True)
    updated_at = Column(TIMESTAMP, nullable=True,
                        server_default=text("now()"))


Base.metadata.drop_all(engine)
Base.metadata.create_all(engine)
