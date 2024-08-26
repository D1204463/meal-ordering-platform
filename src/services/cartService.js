// src/services/cartService.js

const CART_KEY = 'cartItems';

function getStoredCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
}

function saveCart(cart) {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export default {
    getCartItems() {
        return getStoredCart();
    },
    addToCart(item) {
        const cartItems = getStoredCart();
        const existingItem = cartItems.find(cartItem => cartItem.item === item.item);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cartItems.push(item);
        }
        saveCart(cartItems);
    }
};
