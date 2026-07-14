# Adwaith C — Portfolio

Personal portfolio website for **Adwaith C**, Senior Flutter Developer. Built with React + Vite, styled with CSS Modules, and powered by Firebase Firestore.

## Tech Stack

- **React 18** — UI
- **Vite** — build tool + dev server
- **Firebase Firestore** — live data (profile, skills, experience, projects)
- **CSS Modules** — scoped per-component styles
- **CSS Variables** — design tokens in `src/styles/tokens.css`

## Project Structure

```
src/
├── components/
│   ├── Topbar/         # Sticky nav → fixed full-width on scroll
│   ├── Hero/           # Intro + stats
│   ├── About/          # Profile info, education, certifications
│   ├── Skills/         # Accordion skill groups
│   ├── Experience/     # Timeline with sub-projects
│   ├── Projects/       # Cards + modal popup
│   └── Contact/        # Form → saves to Firestore
├── hooks/
│   ├── usePortfolioData.js   # Fetches all data from Firestore
│   └── useContactForm.js     # Contact form state + submit
├── services/
│   └── firebase.js           # Firebase init + Firestore client
├── styles/
│   ├── tokens.css            # CSS variables (colors, spacing, shadows)
│   └── global.css            # Shared classes (panel, chip, btn, animations)
├── data/
│   └── profile.js            # Static fallback / reference data
├── App.jsx
└── App.css                   # Page shell + content grid only
scripts/
├── data.json                 # Source of truth for Firestore seed
└── seed.py                   # Python script to seed Firestore
```

## Getting Started

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the root:

```
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
```

## Seeding Firestore

```bash
cd scripts
pip install firebase-admin
python seed.py
```

Requires `scripts/serviceAccountKey.json` (Firebase Admin SDK key — never commit this).

## Firestore Collections

| Collection | Description |
|---|---|
| `portfolio/profile` | Name, title, contact info, education |
| `portfolio/meta` | Hero stats, nav links |
| `skillGroups` | Skill categories with icons |
| `experience` | Work history with sub-projects |
| `projects` | Project cards with details + tech stack |
| `contacts` | Messages submitted via contact form |
