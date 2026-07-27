from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["Health"])


@router.get("")
def health():
    return {
        "status": "healthy",
        "database": "not_connected",
        "model": "not_loaded",
    }