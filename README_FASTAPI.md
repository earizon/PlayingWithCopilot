FastAPI skeleton

Run locally (create a virtualenv first):

python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt

# Start the app
# Preferred (module mode): ensures imports work with reload
python -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000

# If you previously saw "No module named 'ap'" when running
# `uvicorn app.main:app --reload`, create a package marker:
#  - touch app/__init__.py
# This makes `app` an importable package and resolves reload import issues.

Endpoint:
GET /random -> { "result": <integer 0..1000000> }

Web UI:
Open http://127.0.0.1:8000/ to load the front-end with a button and result box.
