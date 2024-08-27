<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">
        <img src="@/assets/logo.jpg" alt="Logo" class="logo">
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
  margin-right: 1rem; /* 可根据需要调整间距 */
}

.navbar.navbar-expand-lg {
  background-color: #f8650b !important; /* 沙棕色，模擬木材的顏色 */
}

.btn {
  background-color: #ffc55d; /* 象牙白 */

  color: #210b2c; /* 字體顏色設為黑色 */
}

.btn:hover {
  background-color: 8d99ae; /* 浅灰色作為懸停效果 */
  border-color: #EAEAEA;
  color: #000;
}
.user-actions .btn {
  color: #210b2c; /* 按鈕文字顏色 */
  text-decoration: none; /* 移除底線 */
}

.user-actions .btn:hover {
  color: #000; /* 懸停時文字顏色 */
}
/* 移除 router-link 的藍色底線 */
.navbar-content-A .nav-link {
  color: #210b2c; /* 文字顏色 */
  text-decoration: none; /* 移除底線 */
}

.navbar-content-A .nav-link:hover {
  color: #000; /* 懸停時文字顏色 */
}
</style>
