# Testlio Demo Repository


This repository was built only to test the tool at:
https://supplyguard-bat.vercel.app/

**Warning:** Some libraries in this repository may intentionally contain malware or vulnerabilities. This is a demo created solely for testing SupplyGuard's detection capabilities. Do not use this code or its dependencies in production environments.

It is a demo project and is deployed at:
https://testlio-test.vercel.app

## Stack

- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- shadcn/ui components
- Axios for API calls
- Lucide React icons

## Architecture

- `src/app/`: App Router entrypoints, layout, global styles, and pages.
- `src/components/ui/`: Reusable UI primitives (button, card).
- `src/lib/`: Shared utilities.
- `public/`: Static assets.

The app currently demonstrates a simple client-side flow:
UI interaction -> API request (JokeAPI) -> state update -> rendered response.

## Run Locally

```bash
npm install
npm run dev
```

Open http://localhost:3000
