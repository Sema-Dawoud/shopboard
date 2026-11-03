import { getCart, getCartState } from './cart.state.js';

// Get total number of items
export function getCartCount(): number {
  return getCartState().reduce((total, item) => total + item.quantity, 0);
}

// Get total price
export function getCartTotal(): number {
  return getCart().reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
}
