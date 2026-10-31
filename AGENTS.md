# AGENTS.md

## Tech Stack

- Vite (Vanilla JavaScript)
- HTML
- CSS

## Coding Guidelines

- Use semantic HTML first.
- Every input must have a visible label.
- Use mobile-first CSS with min-width media queries.
- Do not use !important.
- Keep the code clean and readable.
- Use native HTML form validation.
- Explain every change made.
- Avoid unnecessary dependencies.

## Rules for ShopBoard

1. Never modify the original products array when sorting. Always create a copy.
2. Never add event listeners inside rendering or filtering functions.
3. Keep cart quantities correct. Adding the same product must increase its quantity.
4. Save cart data in Local Storage so it survives page refresh.
5. Keep DOM manipulation in one file only. Separate data, logic, and cart management into modules.
