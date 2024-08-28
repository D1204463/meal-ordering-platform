<template>
  <div class="cart-page">
    <main class="content">
      <h1>{{ userName }}'s Cart</h1>
      <div v-if="cartItems.length">
        <div v-for="item in cartItems" :key="item.id" class="cart-item">
          <img :src="item.image" alt="Product Image" class="item-image" />
          <div class="item-details">
            <h2>{{ item.name }}</h2>
            <p class="description">{{ item.description }}</p>
            <p>Price: ${{ item.price.toFixed(2) }}</p>
            <p>
              Quantity:
              <button @click="decreaseQuantity(item.id)" :disabled="item.quantity <= 1">-</button>
              <input
                  type="number"
                  v-model.number="item.quantity"
                  @change="updateQuantity(item.id, item.quantity)"
                  min="1"
                  class="quantity-input"
              />
              <button @click="increaseQuantity(item.id)">+</button>
            </p>
            <p>Subtotal: ${{ (item.price * item.quantity).toFixed(2) }}</p>
            <button @click="removeFromCart(item.id)" class="remove-button">Remove</button>
          </div>
        </div>
        <p class="total">Total: ${{ total.toFixed(2) }}</p>
        <div class="cart-actions">
          <button @click="openCheckoutModal" class="checkout-button">Checkout</button>
          <router-link to="/menu">
            <button class="continue-shopping">Continue Shopping</button>
          </router-link>
        </div>
      </div>
      <div v-else class="empty-cart">
        <p>Your cart is empty.</p>
        <img src="path/to/empty-cart-image.png" alt="Empty Cart" class="empty-cart-image" />
      </div>
      <CheckoutModal :show="showModal" @select="handlePaymentMethod" @close="closeCheckoutModal" />
    </main>

    <Footer :isFixed="true" />
  </div>
</template>

<script>
import CheckoutModal from '@/components/CheckoutModal.vue';


export default {
  name: 'CartPage',
  components: {
    CheckoutModal
  },
  data() {
    return {
      cartItems: this.generateMockCartItems(),
      showModal: false,
      userName: 'John Doe' // Mock user name
    };
  },
  computed: {
    total() {
      return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
  },
  methods: {
    generateMockCartItems() {
      return [
        { id: 1, name: 'Item 1', price: 10.00, quantity: 2, description: 'This is a great item.', image: '/img/Japan.jpg' },
        { id: 2, name: 'Item 2', price: 20.00, quantity: 1, description: 'This item is even better!', image: '/img/Italy.jpg' },
        { id: 3, name: 'Item 3', price: 5.50, quantity: 4, description: 'An affordable choice.', image: '/img/Chinese.jpg' },
      ];
    },
    removeFromCart(itemId) {
      this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    },
    updateQuantity(itemId, quantity) {
      const item = this.cartItems.find(item => item.id === itemId);
      if (item) {
        item.quantity = quantity;
      }
    },
    increaseQuantity(itemId) {
      const item = this.cartItems.find(item => item.id === itemId);
      if (item) {
        item.quantity += 1;
        this.updateQuantity(itemId, item.quantity);
      }
    },
    decreaseQuantity(itemId) {
      const item = this.cartItems.find(item => item.id === itemId);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        this.updateQuantity(itemId, item.quantity);
      }
    },
    openCheckoutModal() {
      this.showModal = true;
    },
    closeCheckoutModal() {
      this.showModal = false;
    },
    handlePaymentMethod(method) {
      console.log('Selected payment method:', method);
    }
  }
};
</script>

<style scoped>
.cart-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.nav-links li {
  display: inline;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
}

.nav-links a:hover {
  text-decoration: underline;
}

.content {
  flex: 1;
  padding: 20px;
  max-width: 900px; /* Fixed width */
  margin: 0 auto;  /* Center content */
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 15px;
}

.item-details {
  flex: 1;
}

.item-details h2 {
  font-size: 1.5rem;
  color: #333;
}

.description {
  font-size: 0.9rem;
  color: #666;
  margin: 5px 0;
}

p {
  margin: 5px 0;
}

.quantity-input {
  width: 60px;
  text-align: center;
  margin: 0 10px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #ddd;
}

.checkout-button {
  background-color: #28a745;
  color: white;
}

.checkout-button:hover {
  background-color: #218838;
}

.continue-shopping {
  background-color: #007bff;
  color: white;
}

.continue-shopping:hover {
  background-color: #0056b3;
}

.remove-button {
  background-color: #dc3545;
  color: white;
}

.remove-button:hover {
  background-color: #c82333;
}

.total {
  font-size: 1.2rem;
  font-weight: bold;
  margin-top: 20px;
}

.empty-cart {
  text-align: center;
  margin-top: 50px;
}

.empty-cart-image {
  width: 200px;
  margin-top: 20px;
}

</style>
