<template>
  <div class="home-page">
    <Carousel />

    <div class="nav-buttons">
      <button @click="selectedPage = 'home'">Home</button>
      <button @click="selectedPage = 'RestaurantPage'">Restaurant</button>
      <button @click="selectedPage = 'cart'">Cart</button>
      <button @click="selectedPage = 'settings'">Settings</button>
      <button @click="selectedPage = 'login'">Login</button>
      <button @click="selectedPage = 'register'">Register</button>
      <button @click="selectedPage = 'Delivery'">Delivery</button>
    </div>

    <div v-if="selectedPage === 'home'">
      <h1>Welcome to BARLI-BARLI</h1>
      <p>Explore our menu and order your favorite meals!</p>
    </div>

    <RestaurantPage v-if="selectedPage === 'RestaurantPage'" />
    <CartPage v-if="selectedPage === 'cart'" />
    <SettingsPage v-if="selectedPage === 'settings'" />
    <LoginPage v-if="selectedPage === 'login'" />
    <UserRegisterPage v-if="selectedPage === 'register'" />
    <DeliveryStatus v-if="selectedPage === 'Delivery'" />
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
import DeliveryStatus from "@/views/DeliveryStatus.vue";


export default {
  name: 'HomePage',
  components: {
    UserRegisterPage,
    LoginPage,
    RestaurantPage,
    CartPage,
    SettingsPage,
    DeliveryStatus,
  },
  data() {
    return {
      selectedPage: 'home',
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
  background-color: #8B4513;
  color: #FFFFFF;
  border: 1px solid #6A3D1B;
  border-radius: 4px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  background-image: linear-gradient(145deg, #8B4513, #6A3D1B);
  box-shadow: inset 0 -2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, box-shadow 0.3s;
}

.nav-buttons button:hover {
  background-color: #6A3D1B;
  box-shadow: inset 0 -4px 8px rgba(0, 0, 0, 0.3);
}
</style>
