## RMA Zambia · SME KYC Platform

A Firebase-powered **SME KYC registration platform for Zambia** for `rmazambia-10f55`, built with Next.js + Firebase Authentication + Firestore.

## Getting Started

### 1) Install

```bash
npm install
```

### 2) Configure environment variables

Create `.env.local` (copy from `.env.example`) and set:

- Firebase Web SDK (client): `VITE_FIREBASE_*`
- Firebase Admin (server): `FIREBASE_PROJECT_ID`, `FIREBASE_CLIENT_EMAIL`, `FIREBASE_PRIVATE_KEY`

### 3) Run the development server

```bash
npm run dev
```

Open `http://localhost:3000`.

## SME Registration storage (Firestore)

- SME KYC records are stored in:
  - `smes/{uid}` (doc id = authenticated user UID)
- Admin roles are stored in:
  - `users/{uid}` with `{ role: "admin" }`

## Routes

- Auth:
  - `/login`
  - `/register`
- SME:
  - `/dashboard`
  - `/dashboard/kyc`
- Admin:
  - `/admin` (role-based; non-admins are redirected to `/dashboard`)

## CSV export

- Full export: `GET /api/admin/smes/export`
- Filtered export: `GET /api/admin/smes/export?province=...&district=...&sector=...&status=...&q=...`

## Deploy + custom domain (`www.rma.africa`)

- Deploy with **Firebase App Hosting**.
- Set the same env vars in Firebase App Hosting:
  - `FIREBASE_PROJECT_ID`
  - `FIREBASE_CLIENT_EMAIL`
  - `FIREBASE_PRIVATE_KEY`
- Connect the custom domain `www.rma.africa` in Firebase App Hosting and update DNS as instructed.

## Firestore rules

- Rules are in `firestore.rules` and deny all public access.
