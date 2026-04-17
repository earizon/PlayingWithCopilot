#!/bin/bash

set -e
. .venv/bin/activate
# uvicorn                    ap.main:app --reload 2>&1 | tee uvicorn.gitignore.log
.venv/bin/python -m uvicorn app.main:app --reload 2>&1 | tee uvicorn.gitignore.log

