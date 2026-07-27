from fastapi import APIRouter

router = APIRouter(tags=["System"])


@router.get("/")
def root():
    return {
        "application": "EstateAI",
        "version": "1.0.0",
        "status": "running",
    }