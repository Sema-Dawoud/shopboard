import {
  clearCart,
  decreaseQuantity,
  getCart,
  increaseQuantity,
  removeFromCart,
} from './cart.state.js';
import { getCartCount, getCartTotal } from './cart.logic.js';
import { formatPrice } from '../../shared/ui/format-price.js';
import { getRequiredElement } from '../../shared/ui/get-required-element.js';

const cartContainer = getRequiredElement<HTMLDivElement>('#cart-container');
const cartCount = getRequiredElement<HTMLSpanElement>('#cart-count');
const cartHeadingCount = getRequiredElement<HTMLSpanElement>(
  '#cart-heading-count',
);
const cartLink = getRequiredElement<HTMLAnchorElement>('.cart-link');
const clearCartButton = getRequiredElement<HTMLButtonElement>('#clear-cart');
const totalElement = getRequiredElement<HTMLSpanElement>('#cart-total');

function renderCart(): void {
  const cart = getCart();
  const count = getCartCount();

  if (cart.length === 0) {
    cartContainer.innerHTML =
      '<p class="empty-cart">Your bag is waiting for something lovely.</p>';
  } else {
    cartContainer.innerHTML = cart
      .map(
        (product) => `
          <article class="cart-item">
            <img src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
            <div class="cart-item-details">
              <h3>${product.name}</h3>
              <p>${product.category} · ${formatPrice(product.price)}</p>
              <div class="cart-item-actions" aria-label="Quantity controls for ${product.name}">
                <button type="button" data-action="decrease" data-id="${product.id}" aria-label="Decrease ${product.name} quantity">−</button>
                <span aria-live="polite">${product.quantity}</span>
                <button type="button" data-action="increase" data-id="${product.id}" aria-label="Increase ${product.name} quantity">+</button>
                <button class="remove-item" type="button" data-action="remove" data-id="${product.id}">Remove</button>
              </div>
            </div>
            <strong class="cart-item-price">${formatPrice(product.price * product.quantity)}</strong>
          </article>
        `,
      )
      .join('');
  }

  cartCount.textContent = String(count);
  cartHeadingCount.textContent = `(${count})`;
  cartLink.setAttribute('aria-label', `Shopping bag, items: ${count}`);
  totalElement.textContent = formatPrice(getCartTotal());
}

export function initCartUI(): () => void {
  cartContainer.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest<HTMLButtonElement>(
      'button[data-action]',
    );
    if (!button) return;

    const productId = Number(button.dataset.id);
    const action = button.dataset.action;
    if (!Number.isInteger(productId)) return;

    if (action === 'increase') {
      increaseQuantity(productId);
    } else if (action === 'decrease') {
      decreaseQuantity(productId);
    } else if (action === 'remove') {
      removeFromCart(productId);
    }

    renderCart();
  });

  clearCartButton.addEventListener('click', () => {
    clearCart();
    renderCart();
  });

  renderCart();

  return renderCart;
}
