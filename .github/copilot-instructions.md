# Copilot instructions for this repository

Purpose: guide Copilot sessions on how to discover build/test/lint commands, architecture, and conventions in this repository.

---

## Current repository snapshot
- At time of creation, the repository contains only a .env.gitignore file and no source, tests, CI, or configuration files were detected. Update this file when new code, tests, or tooling are added.

## Build, test, and lint commands (detected)
- Repository now contains a Node project and Playwright E2E tests.
  - Node: package.json present. Useful scripts added:
    - `npm run test:e2e` — runs Playwright: `playwright test` (E2E test suite)
    - `npm test` — placeholder script (no unit tests by default)
  - Playwright: installed as a dev dependency. Run full E2E suite locally with `npm run test:e2e` or `npx playwright test`.
  - Run a single Playwright test file: `npx playwright test tests/example.spec.js`.
  - Run a single Playwright test by title: `npx playwright test -g "test name"`.
  - CI: `.github/workflows/playwright.yml` runs the E2E suite on push and pull_request.

If additional build/test/lint tools are added, prefer the commands defined in their package manifests or in `.github/workflows/` for canonical automation steps.

## High-level architecture
- No source tree detected, so no architecture could be inferred. When code is added, summary expectations for Copilot sessions:
  - Identify top-level service boundaries (e.g., `services/`, `packages/`, `api/`, `web/`, `cli/`).
  - Identify language ecosystems from lockfiles or manifests (package.json, pyproject.toml, go.mod).
  - Locate entrypoints (e.g., `bin/`, `cmd/`, `src/main.*`, `index.js`) and CI workflows.
  - When multiple services or packages exist, prefer reading each service's README and top-level build manifests to form a graph of how pieces interact.

## Key conventions and repo-specific notes
- Present: `.env.gitignore` — this repo keeps a .env.gitignore; assume environment files are intentionally excluded from version control. If a `.env.example` or similar template is added, prefer that as the canonical example for env variables.
- No other repository-specific conventions were found. When new conventions are introduced (e.g., monorepo layout, package naming, testing conventions), add them to this file so Copilot can pick them up.

## AI assistant configuration files
- Checked for common assistant config files (CLAUDE.md, .cursorrules, AGENTS.md, .windsurfrules, CONVENTIONS.md, AIDER_CONVENTIONS.md, .clinerules, .cline_rules). None were found. If such files are added, include key rules and entrypoints here.

---

If you'd like, Copilot sessions can be configured to automatically:
- Prefer searching for `package.json`, `pyproject.toml`, `go.mod`, `Makefile`, and `.github/workflows` when starting.
- If the repository remains empty, ask the user to point to the code location or provide a brief project description.

Summary: created a baseline .github/copilot-instructions.md describing that the repo is currently empty of build/test/lint tooling and giving concrete commands to look for when those are added. Please tell me if you want this file to include example-run commands for other ecosystems or to auto-detect additional config file names.