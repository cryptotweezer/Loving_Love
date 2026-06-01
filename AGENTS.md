# Repository Guidelines

## Project Structure & Module Organization

This is a private Next.js 15 app using the App Router, TypeScript, Tailwind CSS, and Supabase helpers. Keep route files under `src/app`; each route owns its `page.tsx`, such as `src/app/connect/page.tsx`. Shared UI lives in `src/components`, currently split into `home` and `layout`. Supabase browser/server utilities live in `src/lib/supabase`, and shared TypeScript types belong in `src/types`. Static assets are served from `public`, with images in `public/images`. Project planning notes and schemas live in `project_docs`.

## Build, Test, and Development Commands

- `npm run dev`: starts the local Next.js development server with Turbopack.
- `npm run build`: creates a production build and validates TypeScript/Next.js output.
- `npm run start`: serves the production build locally after `npm run build`.
- `npm run lint`: runs the Next.js ESLint configuration.

Install dependencies with `npm install` and keep `package-lock.json` committed when dependencies change.

## Coding Style & Naming Conventions

Use TypeScript and React function components. Follow the existing formatting: two-space indentation, double quotes, semicolons, and named constants for repeated data such as navigation links. Components use PascalCase filenames and exports, for example `Navbar.tsx`; route folders use lowercase kebab-case such as `your-ceremony`. Prefer the `@/*` path alias for imports from `src`. Style UI with Tailwind utility classes and keep global CSS limited to app-wide defaults in `src/app/globals.css`.

## Testing Guidelines

No test framework is currently configured. For now, validate changes with `npm run lint` and `npm run build`. If tests are added later, colocate focused tests near the feature or add a clear `src/__tests__` structure, and use descriptive names that match the component or route under test.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries with optional scope, for example `Mobile IntroSection fixes + Navbar Home link + active state style` and `Add FocusSection + mobile scroll/animation improvements`. Keep commits focused on one behavior or visual change. Pull requests should include a concise description, screenshots or screen recordings for UI changes, linked issues when relevant, and notes about lint/build results.

## Security & Configuration Tips

Do not commit real secrets. Use `.env.local` for local values and update `.env.local.example` when adding required variables. Keep Supabase access patterns in `src/lib/supabase` and avoid duplicating client/server setup across components.
