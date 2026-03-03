# Form Handler

Comprehensive form submission and user management project with a Node.js/Express backend and a Vite + React frontend.

## Overview

- **Backend:** Express API handling submissions and user authentication (JWT-ready).
- **Frontend:** React (Vite) single page app for submitting and viewing form data and admin login.

## Features

- Submit forms from the frontend to the backend.
- Retrieve and view submissions.
- Basic user management and admin verification middleware.

## Repository Structure

- `backend/`: Express server, routes, controllers, models, and config.
- `frontend/`: Vite + React single-page application.

Top-level files:

- `README.md`: This file.

## Prerequisites

- Node.js (16+ recommended)
- npm or yarn
- A MongoDB instance (local or hosted) if the backend uses MongoDB (check `backend/src/config/database.js`).

## Backend - Setup & Run

1. Open terminal and navigate to the backend folder:

```bash
cd backend
```

2. Install dependencies:

```bash
npm install
```

3. Environment variables

Create a `.env` file in `backend/` (or otherwise provide env vars). Typical variables used by this project:

- `PORT` — port to run the backend (default: `3000`)
- `MONGODB_URI` — MongoDB connection string
- `JWT_SECRET` — secret key for signing JWTs (if auth is used)

4. Run the server:

```bash
npm run dev
# or
npm start
```

Check `backend/package.json` for the exact script names (e.g., `dev`, `start`).

## Frontend - Setup & Run

1. Navigate to the frontend folder:

```bash
cd frontend
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open the dev URL (typically `http://localhost:5173`) shown by Vite.

## API Endpoints (overview)

The backend exposes routes for submissions and users. Exact routes live in `backend/src/routes/`.

Common endpoints (confirm exact paths in the route files):

- `POST /api/submissions` — create a new submission
- `GET /api/submissions` — list submissions
- `GET /api/submissions/:id` — get a single submission
- `POST /api/users` — register a user (if implemented)
- `POST /api/users/login` — login (returns token if implemented)

Protected/admin routes are guarded by middleware in `backend/src/middleware/`.

## Database

Check `backend/src/config/database.js` for DB connection logic and details. The project expects a running MongoDB instance if using Mongoose.

## Development Notes

- Controllers live in `backend/src/controllers/` and define request handlers.
- Routes live in `backend/src/routes/` and wire endpoints to controllers.
- Models live in `backend/src/models/`.
- Middleware for authentication and admin verification live in `backend/src/middleware/`.

## Editing and Extending

- To add new API routes: create a route file or add routes in `backend/src/routes/` and implement handlers in `backend/src/controllers/`.
- To change UI behavior: edit React components in `frontend/src/components/`.


