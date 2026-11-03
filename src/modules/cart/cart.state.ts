import products from '../products/products.data.js';
import type { Cart, CartItem, CartProduct } from './cart.types.js';

const STORAGE_KEY = 'shopboard-cart';

let cart: Cart = loadCart();

// Load cart from Local Storage
function loadCart(): Cart {
  try {
    const savedCart = localStorage.getItem(STORAGE_KEY);
    if (!savedCart) return [];

    const parsed: unknown = JSON.parse(savedCart);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (item): item is CartItem =>
        typeof item === 'object' &&
        item !== null &&
        'id' in item &&
        typeof item.id === 'number' &&
        'quantity' in item &&
        typeof item.quantity === 'number' &&
        Number.isInteger(item.quantity) &&
        item.quantity > 0 &&
        products.some((product) => product.id === item.id),
    );
  } catch {
    return [];
  }
}

// Save cart to Local Storage
function saveCart(): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
}

// Get cart with product details
export function getCart(): CartProduct[] {
  return cart
    .map((item) => {
      const product = products.find((candidate) => candidate.id === item.id);

      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter((product): product is CartProduct => product !== null);
}

export function getCartState(): readonly CartItem[] {
  return cart;
}

// Add product or increase its quantity
export function addToCart(productId: number): void {
  const item = cart.find((cartItem) => cartItem.id === productId);

  if (item) {
    item.quantity += 1;
  } else {
    cart.push({ id: productId, quantity: 1 });
  }

  saveCart();
}

// Increase quantity
export function increaseQuantity(productId: number): void {
  addToCart(productId);
}

// Decrease quantity
export function decreaseQuantity(productId: number): void {
  const item = cart.find((cartItem) => cartItem.id === productId);

  if (!item) return;

  item.quantity -= 1;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
}

// Remove one product completely
export function removeFromCart(productId: number): void {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
}

// Clear the entire cart
export function clearCart(): void {
  cart = [];
  saveCart();
}
