from fastapi import APIRouter

from app.schemas.prediction import HouseFeatures
from app.schemas.response import PredictionResponse
from app.services.prediction_service import predict_house_price

router = APIRouter(
    prefix="/predict",
    tags=["Prediction"],
)


USD_TO_INR = 87.0


def format_inr(value: float) -> str:
    if value >= 1e7:
        return f"₹{value / 1e7:.2f} Crore"
    elif value >= 1e5:
        return f"₹{value / 1e5:.2f} Lakh"
    else:
        return f"₹{value:,.0f}"


@router.post("", response_model=PredictionResponse)
def predict(features: HouseFeatures):

    price_usd = predict_house_price(features.model_dump())

    price_inr = price_usd * USD_TO_INR

    return PredictionResponse(
        predicted_price=round(price_inr, 2),
        formatted_price=format_inr(price_inr),
        model="XGBoost",
        confidence="High",
    )