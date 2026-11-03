# ShopBoard Beauty — Current Design

## Scope

This document describes the storefront and interactions currently present in the project. It distinguishes implemented behavior from future ideas; the future ideas below are not statements of assignment requirements or commitments to implement them.

The description is based on the current `index.html`, `src/style.css`, and TypeScript modules. No Figma file or link is present in the project, so this document does not claim pixel-level fidelity to a Figma design.

## Current Visual Direction

The storefront uses a calm beauty-retail style with open space, editorial product photography, restrained decoration, and clear paths to browse and shop. It uses light section backgrounds, dark text, fine borders, and a single dark image overlay on category cards to keep their labels readable. It does not use glass effects or heavy shadows.

### Colors

The six identity colors appear in `src/style.css` with CSS values equivalent to those below:

| Name      | Value     | Current use                                                             |
| --------- | --------- | ----------------------------------------------------------------------- |
| Mint      | `#D6E9E9` | Approach section, category-card fallback, and selected or added states. |
| Beige     | `#E0C1A9` | Decorative details and link underlines.                                 |
| Coral     | `#E87580` | Primary buttons, emphasis, focus details, and cart count.               |
| Off-white | `#FAFAFA` | Main page and control backgrounds.                                      |
| White     | `#FFFFFF` | Cards, controls, image captions, and contrast surfaces.                 |
| Dark text | `#1F1F1F` | Main text, dark surfaces, and outlines.                                 |

The stylesheet also defines two supporting neutrals: muted text `#69645F` and borders `#E8E2DD`. These supplement the identity colors; they do not replace them.

### Type and Layout

- Arial is the base interface font; Georgia is used for the wordmark and editorial headings.
- The hero heading scales with `clamp(3.2rem, 13vw, 5.8rem)`, with a smaller rule below 380px. Section headings also use responsive `clamp()` sizes.
- The content maximum width is `1240px`. Page gutters are `24px` by default, `34px` from 600px, and `56px` from 900px.
- The principal responsive breakpoints are 380px, 600px, 900px, and 1280px.
- Product images use a consistent portrait card ratio with `object-fit: cover`; hero and category photos also use cover cropping.

## Implemented Page and Features

### Announcement, Header, and Navigation

The page starts with a short announcement bar. The header shows the original tulip logo and ShopBoard wordmark, links to Categories, The beauty edit, and Our approach, plus working shortcuts to product search, the shopping bag, and the account form. The same logo and wordmark appear in the footer. The logo is referenced from `public/shopboard_assets/tulip-logo.svg` without a CSS filter or tint.

### Hero and ShopBoard Guide

The hero contains the heading “Make room for your kind of glow,” a short description, Shop now and Explore categories links, and a local skincare product photograph. The guide appears as a small tulip beside a short note; it is not a speech bubble. CSS animates the tulip's sway and the note's entrance once when the page loads. The reduced-motion media rule removes those animations.

### Categories

The current category cards are **Skincare**, **Makeup**, and **Haircare**. Selecting a card applies that category to the product filter. Each card uses a local image, a dark readability overlay, and a category label.

### Featured Products and Product Collection

Featured products are selected from the local data in `src/modules/products/products.data.ts`. The full collection displays product name, category, description, price, photo, and an Add to bag action. Search covers product names, categories, and descriptions; category filtering and price sorting are available. A clear-filters action resets the controls. With no matches, the collection displays an empty-results message.

Product data is local; the current storefront does not fetch products from an API. Product image files, their mappings, and source notes are in `src/assets/beauty/` and `src/assets/beauty/IMAGE_SOURCES.md`.

### The ShopBoard Way

This is an informational section with three editorial points about the store. It does not currently build or save a care routine.

### Account Form

The account section is a frontend preview. The browser validates required fields, email format, and the password minimum length. A valid submission displays a message; no account is created and no backend service is connected.

### Shopping Bag

The bag supports adding products, increasing and decreasing quantities, removing individual products, clearing the bag, and displaying the item count and subtotal. Cart state is saved in Local Storage and restored on page load.

### Footer

The footer uses a dark background with light text. It contains the brand, store navigation, account, bag and search links, a short brand note, and a copyright line. It currently has no shipping, returns, customer-service, or social-media links.

## Current Interaction and Accessibility Details

- Buttons and links have hover styling; interactive elements use visible keyboard focus styles.
- Adding a product changes its button label and appearance briefly to confirm the action.
- Motion uses CSS animations and transitions. The page includes a `prefers-reduced-motion: reduce` rule for the implemented guide animation and transitions.
- Product and category images use fixed display ratios and `object-fit: cover`; some source images may therefore be cropped in their cards.

## Future Ideas

The following ideas are not implemented in the current storefront. This list records concepts previously considered; it does not imply that they are required by the assignment.

- **Build Your Routine:** a step-based routine builder with progress and the tulip responding as steps are completed.
- **Petal interaction:** a subtle petal movement on pointer or keyboard interaction. The current logo asset is not a layered, individually animatable flower illustration.
- **Welcome speech bubble:** a dismissible greeting bubble for the existing guide note.
- **Favorites and confirmation sparkle:** a favorites feature and a subtle visual confirmation for favorites or cart actions. There is currently no favorites state or control.
- **Beauty Sets category:** an optional category to consider alongside the current Skincare, Makeup, and Haircare categories.
