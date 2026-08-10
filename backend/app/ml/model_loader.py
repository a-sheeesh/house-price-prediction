from pathlib import Path
import joblib

BASE_DIR = Path(__file__).resolve().parents[2]
MODEL_PATH = BASE_DIR / "models" / "house_price_model.joblib"

model = joblib.load(MODEL_PATH)