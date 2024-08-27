<template>
  <div class="menu-page">
    <!-- Sidebar for Cart -->
    <div class="sidebar">
      <h2>Cart</h2>
      <ul>
        <li v-for="item in cartItems" :key="item.item">
          {{ item.item }} - {{ item.quantity }} x {{ item.price }}
        </li>
      </ul>
    </div>

    <!-- Main Content Area -->
    <div class="main-content">
      <!-- Banner at the top -->
      <div class="banner">
        <h1>Our Menu</h1>
      </div>

      <!-- Card layout for menu items -->
      <div class="menu-grid">
        <div v-for="item in menuItems" :key="item.item" class="menu-card">
          <h2>{{ item.item }}</h2>
          <p>Price: {{ item.price }}</p>
          <button @click="addToCart(item)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import cartService from '@/services/cartService';
import { menu_data } from '@/fake_data/data.js';

export default {
  name: 'MenuPage',
  data() {
    return {
      menuItems: [],
      cartItems: [],  // Data property to hold cart items
    };
  },
  created() {
    this.fetchMenuItems();
    this.fetchCartItems();  // Fetch initial cart items
  },
  methods: {
    async fetchMenuItems() {
      const menu_id = this.$route.params.id;
      const data = menu_data[menu_id]['menu'];
      this.menuItems = data;
    },
    fetchCartItems() {
      console.log('Fetching cart items');
      this.cartItems = cartService.getCartItems();
      console.log('Cart items:', this.cartItems);
    },
    addToCart(item) {
      console.log('Adding to cart:', item);
      cartService.addToCart({ ...item, quantity: 1 });
      this.fetchCartItems(); // Refresh the cart items after adding
      console.log('Added to cart:', item.item);
    }
  }
};
</script>

<style scoped>
.menu-page {
  display: flex;
}

.sidebar {
  width: 250px;
  background: #f9f9f9;
  padding: 20px;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.main-content {
  flex: 1;
  padding: 20px;
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
