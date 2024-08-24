<template>

  <div class="menu-page">
    <!-- Banner at the top -->
    <div class="banner">
      <h1>Our Menu</h1>
    </div>

    <!-- Card layout for menu items -->
    <div class="menu-grid">
      <div v-for="item in menuItems" :key="item.id" class="menu-card">
        <h2>{{ item.name }}</h2>
        <p>{{ item.description }}</p>
        <p>Price: {{ item.price }}</p>
        <button @click="addToCart(item)">Add to Cart</button>
      </div>
    </div>

    <!-- Cart button -->
    <router-link to="/cart">
      <button class="cart-button">Cart</button>
    </router-link>
    <Footer :isFixed="true" />
    <!-- List of items currently in the cart -->
    <div class="cart-list">
      <h2>Items in Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.id">
          {{ item.name }} - Quantity: {{ item.quantity }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import cartService from '@/services/cartService';

export default {
  name: 'MenuPage',
  data() {
    return {
      menuItems: [],
      cartItems: []
    };
  },
  created() {
    this.fetchMenuItems();
    this.fetchCartItems();
  },
  methods: {
    async fetchMenuItems() {
      try {
        const response = await axios.get('http://localhost:5000/api/menu_items');
        this.menuItems = response.data;
      } catch (error) {
        console.error('Failed to fetch menu items:', error);
      }
    },
    fetchCartItems() {
      this.cartItems = cartService.getCartItems();
    },
    addToCart(item) {
      cartService.addToCart({...item, quantity: 1});
      this.fetchCartItems(); // Update the cart list after adding
      console.log('Added to cart:', item.name);
    }
  }
};
</script>

<style scoped>
.menu-page {
  max-width: 1000px;
  margin: 0 auto;
}

.banner {
  text-align: center;
  margin-bottom: 20px;
}

.menu-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.menu-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.cart-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
}

.cart-list {
  margin-top: 20px;
  border-top: 1px solid #ccc;
  padding-top: 20px;
}
</style>
