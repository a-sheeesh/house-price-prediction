from pathlib import Path
import joblib

MODEL_PATH = Path(__file__).resolve().parents[3] / "models" / "house_price_model.joblib"

model = joblib.load(MODEL_PATH)