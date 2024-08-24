// src/services/cartService.js
export default {
    cartItems: [],

    addToCart(item) {
        const existingItem = this.cartItems.find(cartItem => cartItem.id === item.id);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            this.cartItems.push(item);
        }
    },

    removeFromCart(itemId) {
        this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    },

    getCartItems() {
        return this.cartItems;
    },

    calculateTotal() {
        return this.cartItems.reduce((total, item) => total + (parseFloat(item.price.replace('$', '')) * item.quantity), 0);
    }
};
