// Search products by name
export function searchProducts(products, searchTerm) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}

// Filter products by category
export function filterProducts(products, category) {
  if (category === 'all') {
    return [...products];
  }

  return products.filter((product) => product.category === category);
}

// Sort products by price
export function sortProducts(products, sortOrder) {
  const sortedProducts = [...products];

  if (sortOrder === 'low-high') {
    return sortedProducts.sort((a, b) => a.price - b.price);
  }

  if (sortOrder === 'high-low') {
    return sortedProducts.sort((a, b) => b.price - a.price);
  }

  return sortedProducts;
}
