<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/web_logo.jpg" alt="Logo" class="logo">
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
          <router-link to="/menu" v-slot="{ navigate }">
            <li class="nav-item" @click="navigate">
              <span class="nav-link">Menu</span>
            </li>
          </router-link>
          <router-link to="/order-history" v-slot="{ navigate }">
            <li class="nav-item" @click="navigate">
              <span class="nav-link">OrderHistory</span>
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
            <div class="location me-3">
              <span>位置 {{ location }}</span>
              <button class="btn btn-outline-secondary ms-2">更改位置</button>
            </div>
            <span class="navbar-text ms-auto">
              Guest
            </span>
            <div class="user-actions">
              <button class="btn btn-outline-primary me-2">
                <router-link to="/login">登入</router-link>
              </button>
              <button class="btn btn-outline-secondary me-2">
                <router-link to="/register">註冊</router-link>
              </button>
              <button class="btn btn-outline-success">
                <router-link to="/cart">購物車</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      location: '當前位置'
    };
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
  margin-right: 1rem; /* 可根據需要調整間距 */
}
</style>
