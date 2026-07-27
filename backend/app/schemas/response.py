from pydantic import BaseModel


class PredictionResponse(BaseModel):
    predicted_price: float
    formatted_price: str
    model: str
    confidence: str