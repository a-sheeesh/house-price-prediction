from pydantic import BaseModel


class HouseFeatures(BaseModel):
    OverallQual: int
    GrLivArea: float
    GarageCars: float
    GarageArea: float
    TotalBsmtSF: float
    FullBath: int
    YearBuilt: int
    LotArea: float
    TotRmsAbvGrd: int
    Neighborhood: str
    HouseStyle: str
    SaleCondition: str