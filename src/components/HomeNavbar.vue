<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="/img/logo.webp" alt="Logo" class="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0 navbar-content-A">
          <router-link to="/RestaurantPage" v-slot="{ navigate }">
            <li class="nav-item" @click="navigate">
              <span class="nav-link active" aria-current="page">RestaurantPage</span>
            </li>
          </router-link>
          <router-link to="/delivery-status" v-slot="{ navigate }">
            <li class="nav-item" @click="navigate">
              <span class="nav-link">DeliveryStatusPage</span>
            </li>
          </router-link>
        </ul>
        <div class="navbar-content-A">
          <div class="d-flex">
            <button class="btn btn-outline-secondary me-3" data-bs-toggle="modal" data-bs-target="#addressModal">
              位置 {{ location }}
            </button>
            <span class="navbar-text ms-auto">
              {{ userName || 'Guest' }}
            </span>
            <div class="user-actions">
              <button class="btn btn-outline-primary me-2" v-if="!isLoggedIn">
                <router-link to="/login">登入</router-link>
              </button>
              <button class="btn btn-outline-secondary me-2" v-if="!isLoggedIn">
                <router-link to="/register">註冊</router-link>
              </button>
              <button class="btn btn-outline-success" v-if="isLoggedIn">
                <router-link to="/cart">購物車</router-link>
              </button>
              <button class="btn btn-outline-danger" v-if="isLoggedIn" @click="logout">
                登出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddressModal @address-submitted="updateLocation" />
  </nav>
</template>

<script>
import AddressModal from './AddressModal.vue';

export default {
  name: 'NavBar',
  components: {
    AddressModal
  },
  data() {
    return {
      location: '當前位置',
      userName: '',
      isLoggedIn: false
    };
  },
  methods: {
    updateLocation(newAddress) {
      this.location = newAddress;
    },
    logout() {
      // Implement logout logic here
      this.userName = '';
      this.isLoggedIn = false;
      // Optionally, redirect to login page
      this.$router.push('/login');
    },
    fetchUser() {
      // Example: Fetch user information from an API or a store
      const user = { name: 'John Doe', loggedIn: true }; // Replace with actual API call
      if (user) {
        this.userName = user.name;
        this.isLoggedIn = user.loggedIn;
      }
    }
  },
  created() {
    this.fetchUser();
  }
};
</script>

<style scoped>
.logo {
  width: 80px;
}
.navbar-content-A {
  width: 50%;
}
.navbar-content-B {
  width: 50%;
}
.navbar-text {
  margin-right: 1rem;
}
</style>
