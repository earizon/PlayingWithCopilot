from fastapi import FastAPI
from fastapi.responses import FileResponse
from fastapi.staticfiles import StaticFiles
from random import randint
from pathlib import Path

app = FastAPI()

# Mount static files (served at /static)
app.mount("/static", StaticFiles(directory=Path(__file__).parent / "static"), name="static")


@app.get("/")
async def root():
    """Serve the single-file front-end UI."""
    return FileResponse(Path(__file__).parent / "static" / "index.html")


@app.get("/random")
async def get_random():
    """Return a JSON object with a random integer between 0 and 1,000,000.

    Example response: { "result": 1234 }
    """
    return {"result": randint(0, 1000000)}
