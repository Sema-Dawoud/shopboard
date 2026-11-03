import './style.css';
import { initAccountUI } from './modules/account/account.ui.js';
import { addToCart } from './modules/cart/cart.state.js';
import { initCartUI } from './modules/cart/cart.ui.js';
import { initProductsUI } from './modules/products/products.ui.js';

const refreshCart = initCartUI();
initAccountUI();

initProductsUI((productId) => {
  addToCart(productId);
  refreshCart();
});
