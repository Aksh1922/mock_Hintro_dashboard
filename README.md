<<<<<<< HEAD
# Hintro Dashboard

Frontend assignment for the Hintro dashboard. The app follows the provided desktop and mobile designs, uses the mock API data, supports the two required users, and stores feedback in localStorage.

## Tech Stack

- Next.js
- React
- CSS Modules
- Fetch API
- localStorage

## Features

- Dashboard with total sessions, average duration, AI usage, and last session stats
- Recent calls list from the mock API
- Empty dashboard state for `u1`
- Populated/randomized dashboard state for `u2`
- User switching through the topbar menu
- Feedback form with saved feedback history in localStorage
- Logout confirmation modal
- Responsive desktop and mobile layout
- Shared theme variables in `src/styles/globals.css`

## API Setup

Create `.env.local` in the project root:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

The app expects these mock API endpoints:

```text
GET /api/auth/profile
GET /api/auth/dashboard
GET /api/call-sessions/stats
GET /api/call-sessions?limit=10
```

Pass the active user with the `x-user-id` header. The supported users are:

```text
u1 - empty state user
u2 - populated/random data user
```

## Running Locally

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Checks

Run lint:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

## Project Structure

```text
app/
  layout.js
  page.js
  page.module.css

src/
  components/
  hooks/
  lib/
  styles/
```

## Notes

- Dashboard data comes from the mock API and is normalized in `src/lib/api.js`.
- Feedback entries are saved in browser localStorage.
- If the mock API is unavailable, the app can still show fallback mock data for local testing.
=======

>>>>>>> 3bff2782728686a8dd2cf52f8c167f49bdd15524
