import pandas as pd

from app.ml.model_loader import model


def predict_house_price(data: dict) -> float:
    df = pd.DataFrame([data])

    prediction = model.predict(df)[0]

    return float(prediction)