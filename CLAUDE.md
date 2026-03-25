# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` — Start Vite dev server (default http://localhost:5173)
- `npm run build` — Production build
- `npm run lint` — Run ESLint
- `npm run preview` — Preview production build

No test framework is configured.

## Architecture

Single-page React 19 expense tracker app built with Vite 6. Pure JavaScript (no TypeScript).

**All application logic lives in `src/App.jsx`** — a single component managing state with `useState`. It handles:
- Transaction list with income/expense tracking
- Summary calculations (balance, income, expenses)
- Add transaction form with validation
- Filtering by type and category

There is no routing, no state management library, no backend, and no data persistence.

## Styling

Plain CSS files — `src/index.css` for global resets and `src/App.css` for component styles. No CSS-in-JS or CSS modules.

## ESLint

Uses ESLint 9 flat config format (`eslint.config.js`) with react-hooks and react-refresh plugins.
