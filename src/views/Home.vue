<template>
  <div class="home-page">
    <div class="nav-buttons">
      <button @click="selectedPage = 'home'">Home</button>
      <button @click="selectedPage = 'RestaurantPage'">Restaurant</button>
      <button @click="selectedPage = 'cart'">Cart</button>
      <button @click="selectedPage = 'settings'">Settings</button>
      <button @click="selectedPage = 'login'">Login</button>
      <button @click="selectedPage = 'register'">Register</button>
      <button @click="selectedPage = 'Delivery'">Delivery</button>
      <button @click="selectedPage = 'Menu'">Menu</button>
    </div>

    <div v-if="selectedPage === 'home'">
      <h1>Welcome to the Meal Ordering Platform</h1>
      <p>Explore our menu and order your favorite meals!</p>
    </div>

    <RestaurantPage v-if="selectedPage === 'Restaurant'" />
    <CartPage v-if="selectedPage === 'cart'" />
    <SettingsPage v-if="selectedPage === 'settings'" />
<login-page v-if="selectedPage === 'login'" />
    <user-register-page v-if="selectedPage === 'register'" />
    <menu-page v-if="selectedPage === 'Menu'" />
    <delivery-status v-if="selectedPage === 'Delivery'" />
    <!-- Footer Banner -->
    <Footer :isFixed="true" />
  </div>
</template>

<script>
import CartPage from "@/views/Cart.vue";
import SettingsPage from "@/views/Settings.vue";
import LoginPage from "@/components/UserLogin.vue";
import RestaurantPage from "@/views/RestaurantPage.vue";
import UserRegisterPage from "@/components/Register.vue";
import deliveryStatus from "@/views/DeliveryStatus.vue";
import MenuPage from "@/views/Menu.vue";

export default {
  name: 'HomePage',
  components: {
    UserRegisterPage,
    LoginPage,
    RestaurantPage,
    CartPage,
    SettingsPage,
    MenuPage,
    deliveryStatus,
  },
  data() {
    return {
      selectedPage: 'home', // 初始頁面
    };
  },
};
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 50px;
}

.nav-buttons {
  margin-bottom: 20px;
}

.nav-buttons button {
  margin: 5px;
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
}

.nav-buttons button:hover {
  background-color: #0056b3;
}

</style>
