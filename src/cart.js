import products from './products.js';

const STORAGE_KEY = 'shopboard-cart';

let cart = loadCart();

// Load cart from Local Storage
function loadCart() {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

// Save cart to Local Storage
function saveCart() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

// Get cart with product details
export function getCart() {
  return cart
    .map((item) => {
      const product = products.find((p) => p.id === item.id);

      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);
}

// Add product or increase its quantity
export function addToCart(productId) {
  const item = cart.find((item) => item.id === productId);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
}

// Increase quantity
export function increaseQuantity(productId) {
  addToCart(productId);
}

// Decrease quantity
export function decreaseQuantity(productId) {
  const item = cart.find((item) => item.id === productId);

  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
}

// Remove one product completely
export function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
}

// Clear the entire cart
export function clearCart() {
  cart = [];
  saveCart();
}

// Get total number of items
export function getCartCount() {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// Get total price
export function getCartTotal() {
  return getCart().reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
}
