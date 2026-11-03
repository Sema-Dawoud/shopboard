# ShopBoard Beauty

ShopBoard Beauty is a responsive, framework-free storefront for browsing a locally defined collection of skincare, makeup, and haircare products.

## Technology

- Vite
- TypeScript
- HTML
- CSS

## Requirements

- Node.js and npm. The exact minimum supported versions are not declared in the project.

## Getting Started

Install the project dependencies:

```sh
npm install
```

Start the Vite development server:

```sh
npm run dev
```

Vite prints the local URL in the terminal. Open that URL in a browser.

## Current Features

- Browse featured products and the full local product collection.
- Search product names, categories, and descriptions.
- Filter products by Skincare, Makeup, or Haircare.
- Sort products by price in ascending or descending order.
- Add products to the shopping bag, adjust quantities, remove items, and clear the bag.
- Keep cart items in Local Storage so they can be restored on the same browser and device after a reload.
- Use the account form's native required, email, and password-length validation. The form is a frontend preview and does not create an account or connect to a backend service.

Product records are defined in `src/modules/products/products.data.ts`. Each record includes its category, price, description, local image, alternative text, and featured status. The storefront does not fetch product data from an API.

## Project Structure

```text
.
├── .husky/
│   └── pre-commit             # Runs lint-staged
├── .vscode/
│   └── settings.json          # Editor settings
├── AGENTS.md                  # Project-specific contributor and agent guidance
├── DESIGN.md                  # Current storefront design and feature notes
├── README.md
├── debugging-log.md
├── eslint.config.js
├── index.html                 # Storefront document and static page sections
├── package-lock.json
├── package.json               # Dependencies, npm scripts, and lint-staged config
├── public/
│   └── shopboard_assets/
│       └── tulip-logo.svg      # Original tulip logo; no favicon file is present
├── src/
│   ├── assets/
│   │   ├── beauty/
│   │   │   ├── haircare.jpg
│   │   │   ├── lip-gloss.jpg
│   │   │   ├── lipstick-nude.jpg
│   │   │   ├── lipstick-red.jpg
│   │   │   ├── makeup-palette.jpg
│   │   │   ├── skincare-duo.jpg
│   │   │   ├── skincare-hero.jpg
│   │   │   └── IMAGE_SOURCES.md # Image URLs and source-page attribution
│   │   └── images.d.ts         # Type declarations for imported images
│   ├── main.ts                 # Application entry point and feature initialization
│   ├── modules/
│   │   ├── account/
│   │   │   └── account.ui.ts
│   │   ├── cart/
│   │   │   ├── cart.logic.ts
│   │   │   ├── cart.state.ts
│   │   │   ├── cart.types.ts
│   │   │   └── cart.ui.ts
│   │   └── products/
│   │       ├── products.data.ts # Local product records and image mappings
│   │       ├── products.logic.ts
│   │       ├── products.types.ts
│   │       └── products.ui.ts
│   ├── shared/
│   │   └── ui/
│   │       ├── format-price.ts
│   │       └── get-required-element.ts
│   └── style.css               # Global and responsive storefront styles
├── tsconfig.json
├── .gitignore
├── .prettierignore
└── .prettierrc
```

## Available Commands

These commands are defined in `package.json`:

| Command                | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `npm run dev`          | Start the Vite development server.                          |
| `npm run typecheck`    | Run TypeScript without emitting files.                      |
| `npm run lint`         | Run ESLint on the project.                                  |
| `npm run format`       | Format files with Prettier; this writes changes.            |
| `npm run format:check` | Check formatting with Prettier without writing changes.     |
| `npm run build`        | Create a production build in `dist/`.                       |
| `npm run preview`      | Preview the production build locally.                       |
| `npm run prepare`      | Install Husky Git hooks; normally run automatically by npm. |

The pre-commit hook runs `lint-staged`, whose staged-file tasks are configured in `package.json`.

## Image Sources

Storefront product and category photos are stored locally in `src/assets/beauty/`. Their source image URLs and corresponding source pages are documented in [`src/assets/beauty/IMAGE_SOURCES.md`](src/assets/beauty/IMAGE_SOURCES.md). The original tulip logo is served from `public/shopboard_assets/tulip-logo.svg`.
