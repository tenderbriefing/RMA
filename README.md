## Resilient Markets Africa (RMA) Website

Public website for `www.rma.africa` plus an **SME Registration** form that saves submissions to **Firestore** (Firebase).

## Getting Started

### 1) Install

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local` (copy from `.env.local.example`) and set Firebase Admin credentials:

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY` (keep `\n` escapes)

### 3) Run the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## SME Registration storage (Firestore)

- Submissions are written by `POST /api/sme-registration` into the collection:
  - `smes` (doc id = `smeId`)
- This endpoint uses **Firebase Admin SDK** on the server (credentials are **not** exposed to the browser).

## Admin export (CSV/JSON)

- Page: `/admin/registrations`
- API: `GET /api/admin/registrations?format=csv|json`
- Protected by `ADMIN_EXPORT_TOKEN` (set in `.env.local`)

## Deploy + custom domain (`www.rma.africa`)

- Deploy with **Firebase App Hosting**.
- Set the same env vars in Firebase App Hosting:
  - `FIREBASE_PROJECT_ID`
  - `FIREBASE_CLIENT_EMAIL`
  - `FIREBASE_PRIVATE_KEY`
  - `ADMIN_EXPORT_TOKEN`
- Connect the custom domain `www.rma.africa` in Firebase App Hosting and update DNS as instructed.

## Notes

- The repo currently contains no commits (fresh scaffold). Commit when you’re ready.
