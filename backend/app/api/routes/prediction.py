from fastapi import APIRouter

from app.schemas.prediction import HouseFeatures
from app.schemas.response import PredictionResponse
from app.services.prediction_service import predict_house_price

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"],
)

@router.post("", response_model=PredictionResponse)
def predict(features: HouseFeatures):

    price = predict_house_price(features.model_dump())

    return PredictionResponse(
        predicted_price=round(price, 2),
        formatted_price=f"${price:,.2f}",
        model="XGBoost",
        confidence="High",
    )