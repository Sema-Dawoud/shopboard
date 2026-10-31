console.log('JavaScript is working!');

import './style.css';
import products from './products.js';

const productsContainer = document.querySelector('#products-container');
const searchInput = document.querySelector('#search-input');
const categoryFilter = document.querySelector('#category-filter');
const sortSelect = document.querySelector('#sort-select');
const cartContainer = document.querySelector('#cart-container');
const cartCount = document.querySelector('#cart-count');

console.log('Search:', searchInput);
console.log('Category:', categoryFilter);
console.log('Sort:', sortSelect);

let cart = [];

// JavaScript practice
console.log(productsContainer);
console.log(products.length);

const productNames = products.map((p) => p.name);
console.log(productNames);

const cheapProducts = products.filter((p) => p.price < 50);
console.log(cheapProducts);

const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log(sortedProducts);

const foundProduct = products.find((p) => p.id === 4);
console.log(foundProduct);

const totalPrice = products.reduce((total, p) => total + p.price, 0);
console.log(totalPrice);

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

// Initial display
renderProducts(products);

// Add products to cart
productsContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('add-to-cart')) {
    const productId = Number(event.target.dataset.id);

    const selectedProduct = products.find(
      (product) => product.id === productId,
    );

    cart.push(selectedProduct);

    cartCount.textContent = cart.length;
    renderCart();

    console.log(cart);
  }
});

// Display cart
function renderCart() {
  cartContainer.innerHTML = cart
    .map(
      (product) => `
    <div class="product-card">
      <h3>${product.name}</h3>
      <p>${product.category}</p>
      <p class="price">$${product.price}</p>
    </div>
  `,
    )
    .join('');
}

// Search products
function searchProducts(searchTerm) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}

// Filter products by category
function filterProducts(productsToFilter, category) {
  if (category === 'all') {
    return productsToFilter;
  }

  return productsToFilter.filter((product) => product.category === category);
}

// Sort products by price
function sortProducts(productsToSort, sortOrder) {
  const sorted = [...productsToSort];

  if (sortOrder === 'low-high') {
    return sorted.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === 'high-low') {
    return sorted.sort((a, b) => b.price - a.price);
  }

  return sorted;
}

// Combine search, category filter, and sorting
function renderFilteredProducts() {
  const searchTerm = searchInput.value;
  const category = categoryFilter.value;

  const searchedProducts = searchProducts(searchTerm);

  const filteredProducts = filterProducts(searchedProducts, category);

  const sortedProducts = sortProducts(filteredProducts, sortSelect.value);

  renderProducts(sortedProducts);
}

// Event listeners
searchInput.addEventListener('input', renderFilteredProducts);

categoryFilter.addEventListener('change', renderFilteredProducts);

sortSelect.addEventListener('change', renderFilteredProducts);
