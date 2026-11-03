import products from './products.data.js';
import type { Product } from './products.types.js';
import {
  filterProducts,
  searchProducts,
  sortProducts,
} from './products.logic.js';
import { formatPrice } from '../../shared/ui/format-price.js';
import { getRequiredElement } from '../../shared/ui/get-required-element.js';

const productsContainer = getRequiredElement<HTMLDivElement>(
  '#products-container',
);
const featuredProductsContainer = getRequiredElement<HTMLDivElement>(
  '#featured-products-container',
);
const productInteractionRoot = getRequiredElement<HTMLElement>('main');
const categoryGrid = getRequiredElement<HTMLDivElement>('#category-grid');
const searchInput = getRequiredElement<HTMLInputElement>('#search-input');
const categoryFilter =
  getRequiredElement<HTMLSelectElement>('#category-filter');
const sortSelect = getRequiredElement<HTMLSelectElement>('#sort-select');
const resultCount = getRequiredElement<HTMLParagraphElement>('#result-count');
const clearFiltersButton =
  getRequiredElement<HTMLButtonElement>('#clear-filters');

function renderProducts(
  productsToDisplay: Product[],
  container: HTMLDivElement,
): void {
  if (productsToDisplay.length === 0) {
    container.innerHTML =
      '<p class="empty-products">No products found. Try changing your search or filters.</p>';
    return;
  }

  container.innerHTML = productsToDisplay
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-image-wrap">
            <img class="product-image" src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
            <span class="product-category-label">${product.category}</span>
          </div>
          <div class="product-details">
            <h3>${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-purchase-row">
              <span class="price">${formatPrice(product.price)}</span>
              <button class="add-to-cart" type="button" data-id="${product.id}" aria-label="Add ${product.name} to shopping bag">
                Add to bag
              </button>
            </div>
          </div>
        </article>
      `,
    )
    .join('');
}

function updateCategoryCards(): void {
  for (const button of categoryGrid.querySelectorAll<HTMLButtonElement>(
    '[data-category]',
  )) {
    button.setAttribute(
      'aria-pressed',
      String(button.dataset.category === categoryFilter.value),
    );
  }
}

function renderFilteredProducts(): void {
  const searched = searchProducts(products, searchInput.value);
  const filtered = filterProducts(searched, categoryFilter.value);
  const sorted = sortProducts(filtered, sortSelect.value);

  renderProducts(sorted, productsContainer);
  resultCount.textContent = `${sorted.length} ${sorted.length === 1 ? 'product' : 'products'}`;
  updateCategoryCards();
}

function handleProductListClick(
  event: MouseEvent,
  onAddToCart: (productId: number) => void,
): void {
  if (!(event.target instanceof Element)) return;

  const button = event.target.closest<HTMLButtonElement>('.add-to-cart');
  if (!button) return;

  const productId = Number(button.dataset.id);
  if (!Number.isInteger(productId)) return;

  onAddToCart(productId);
  button.textContent = 'Added';
  button.classList.add('is-added');
  window.setTimeout(() => {
    button.textContent = 'Add to bag';
    button.classList.remove('is-added');
  }, 900);
}

export function initProductsUI(onAddToCart: (productId: number) => void): void {
  productInteractionRoot.addEventListener('click', (event) =>
    handleProductListClick(event, onAddToCart),
  );

  categoryGrid.addEventListener('click', (event) => {
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest<HTMLButtonElement>('[data-category]');
    const category = button?.dataset.category;
    if (!category) return;

    categoryFilter.value = category;
    renderFilteredProducts();
    productsContainer.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  searchInput.addEventListener('input', renderFilteredProducts);
  categoryFilter.addEventListener('change', renderFilteredProducts);
  sortSelect.addEventListener('change', renderFilteredProducts);

  clearFiltersButton.addEventListener('click', () => {
    searchInput.value = '';
    categoryFilter.value = 'all';
    sortSelect.value = 'default';
    renderFilteredProducts();
    searchInput.focus();
  });

  const favoriteProducts = products.filter((product) => product.featured);

  for (const product of products) {
    if (favoriteProducts.length === 5) break;
    if (!product.featured) favoriteProducts.push(product);
  }

  renderProducts(favoriteProducts, featuredProductsContainer);
  renderFilteredProducts();
}
