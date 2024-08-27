// cartService.js
export default {
    getCartItems() {
        // 確保這裡能正確讀取存儲中的購物車項目
        return JSON.parse(localStorage.getItem('cartItems')) || [];
    },
    addToCart(item) {
        const cartItems = this.getCartItems();
        const existingItem = cartItems.find(cartItem => cartItem.item === item.item);
        if (existingItem) {
            existingItem.quantity += item.quantity;
        } else {
            cartItems.push(item);
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
};
