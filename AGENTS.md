# AGENTS.md

## Tech Stack

- Vite for development and production builds.
- TypeScript with strict type checking for application code.
- Semantic HTML for the page structure.
- CSS for responsive styling and interactions.
- The application is framework-free; it uses browser APIs and native form validation.

## Project Structure

- `index.html` — storefront page structure and static content.
- `src/main.ts` — application entry point; imports styles and initializes feature UIs.
- `src/style.css` — global storefront styles and responsive layouts.
- `src/modules/products/` — local product data, product types, search/filter/sort logic, and product UI.
- `src/modules/cart/` — cart types, Local Storage-backed cart state, cart calculations, and cart UI.
- `src/modules/account/` — account form UI and its current client-side validation response.
- `src/shared/ui/` — small UI helpers shared by feature modules.
- `src/assets/beauty/` — local storefront photography and `IMAGE_SOURCES.md` attribution notes.
- `public/` — static files served from the site root, including the favicon and the original tulip logo at `public/shopboard_assets/tulip-logo.svg`.
- `shopboard_assets/` — supplied visual reference screenshots retained for design reference; these are not storefront product photos.

## Adding or Changing a Feature

- Put feature-specific code in a new directory under `src/modules/<feature>/`.
- Keep responsibilities separated into focused files, such as `.types.ts`, `.data.ts`, `.logic.ts`, `.state.ts`, and `.ui.ts`, as appropriate for the feature. Do not create empty or unnecessary files just to match this list.
- Put reusable UI helpers used by more than one feature in `src/shared/ui/`.
- Initialize a feature from `src/main.ts` when it needs application startup wiring.
- Put page structure in `index.html`, global or responsive styles in `src/style.css`, and feature behavior in TypeScript modules.

## Coding Guidelines

- Prefer semantic HTML and native browser behavior.
- Give every input a visible, associated label.
- Use mobile-first CSS with `min-width` media queries.
- Do not use `!important`.
- Keep code readable and avoid unnecessary dependencies.
- Use native HTML form validation where it fits the form.
- Explain each change in the completion summary.
- Keep all application logic in TypeScript; do not introduce `any`, type assertions, or non-null assertions to bypass type checking.
- Keep DOM queries, event listeners, rendering, and other DOM manipulation in feature `.ui.ts` files. Keep data files declarative and logic/state modules independent of DOM manipulation.

## ShopBoard Rules

1. Never sort the original products array in place. Copy it before sorting.
2. Register event listeners during UI initialization, not inside rendering or filtering functions.
3. Adding an existing product must increase its quantity rather than create a duplicate cart entry.
4. Persist cart state in Local Storage and validate restored data before using it.
5. Keep product data, business logic, cart state, and DOM presentation in their appropriate feature modules.

## Lessons from Previous AI-Assisted Changes

1. When adding or changing TypeScript files, update ESLint's file patterns and TypeScript parser configuration as needed. Verify that ESLint actually checks the files under `src/`; do not assume JavaScript lint coverage includes TypeScript.
2. After changing the stack or project structure, update `README.md` and this file in the same task. Check their descriptions against `package.json`, `tsconfig.json`, and the current directory tree instead of carrying forward outdated documentation.
3. Keep architecture rules aligned with the feature-module structure: DOM queries, event handlers, and rendering belong in each feature's `.ui.ts` file, not in one global UI file or in data and logic modules.
4. Check a command's scope before running it. `npm run format` runs Prettier with `--write .` across the project; use it only when whole-project formatting is intended, or choose a scoped Prettier command for selected files.
