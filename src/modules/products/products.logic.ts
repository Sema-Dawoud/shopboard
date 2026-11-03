import type { Product } from './products.types.js';

// Search product names, categories, and descriptions
export function searchProducts(
  products: Product[],
  searchTerm: string,
): Product[] {
  const query = searchTerm.trim().toLowerCase();

  if (query.length === 0) {
    return [...products];
  }

  return products.filter((product) =>
    [product.name, product.category, product.description]
      .join(' ')
      .toLowerCase()
      .includes(query),
  );
}

// Filter products by category
export function filterProducts(
  products: Product[],
  category: string,
): Product[] {
  if (category === 'all') {
    return [...products];
  }

  return products.filter((product) => product.category === category);
}

// Sort products by price
export function sortProducts(
  products: Product[],
  sortOrder: string,
): Product[] {
  const sortedProducts = [...products];

  if (sortOrder === 'low-high') {
    return sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === 'high-low') {
    return sortedProducts.sort((a, b) => b.price - a.price);
  }

  return sortedProducts;
}
