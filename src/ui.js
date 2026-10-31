import products from './products.js';

import { searchProducts, filterProducts, sortProducts } from './logic.js';

import {
  getCart,
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
  getCartCount,
  getCartTotal,
} from './cart.js';

// DOM elements
const productsContainer = document.querySelector('#products-container');
const searchInput = document.querySelector('#search-input');
const categoryFilter = document.querySelector('#category-filter');
const sortSelect = document.querySelector('#sort-select');
const cartContainer = document.querySelector('#cart-container');
const cartCount = document.querySelector('#cart-count');
const clearCartButton = document.querySelector('#clear-cart');

// Display products
function renderProducts(productsToDisplay) {
  productsContainer.innerHTML = productsToDisplay
    .map(
      (product) => `
        <article class="product-card">
          <h3>${product.name}</h3>
          <p>${product.category}</p>
          <p class="price">$${product.price}</p>
          <button class="add-to-cart" data-id="${product.id}">
            Add to Cart
          </button>
        </article>
      `,
    )
    .join('');
}

// Display cart
function renderCart() {
  const cart = getCart();

  if (cart.length === 0) {
    cartContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cartContainer.innerHTML = `
      ${cart
        .map(
          (product) => `
            <div class="product-card">
              <h3>${product.name}</h3>
              <p>${product.category}</p>
              <p class="price">$${product.price}</p>

              <p>Quantity: ${product.quantity}</p>

              <button data-action="decrease" data-id="${product.id}">
                -
              </button>

              <button data-action="increase" data-id="${product.id}">
                +
              </button>

              <button data-action="remove" data-id="${product.id}">
                Remove
              </button>
            </div>
          `,
        )
        .join('')}
    `;
  }

  cartCount.textContent = getCartCount();

  const totalElement = document.querySelector('#cart-total');

  if (totalElement) {
    totalElement.textContent = `$${getCartTotal()}`;
  }
}

// Search, filter, and sort together
function renderFilteredProducts() {
  const searched = searchProducts(products, searchInput.value);

  const filtered = filterProducts(searched, categoryFilter.value);

  const sorted = sortProducts(filtered, sortSelect.value);

  renderProducts(sorted);
}

// Add product to cart
productsContainer.addEventListener('click', (event) => {
  const button = event.target.closest('.add-to-cart');

  if (!button) return;

  addToCart(Number(button.dataset.id));
  renderCart();
});

// Cart actions
cartContainer.addEventListener('click', (event) => {
  const button = event.target.closest('button');

  if (!button) return;

  const productId = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === 'increase') {
    increaseQuantity(productId);
  } else if (action === 'decrease') {
    decreaseQuantity(productId);
  } else if (action === 'remove') {
    removeFromCart(productId);
  }

  renderCart();
});

// Search and filter events
searchInput.addEventListener('input', renderFilteredProducts);
categoryFilter.addEventListener('change', renderFilteredProducts);
sortSelect.addEventListener('change', renderFilteredProducts);
clearCartButton.addEventListener('click', () => {
  clearCart();
  renderCart();
});

// Initialize page
export function initShop() {
  renderProducts(products);
  renderCart();
}
