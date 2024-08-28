<template>
  <div class="login-page">
    <h1>Login</h1>
    <form @submit.prevent="handleLogin">
      <div>
        <label for="username">Username:</label>
        <input v-model="username" type="text" id="username" required />
      </div>
      <div>
        <label for="password">Password:</label>
        <input v-model="password" type="password" id="password" required />
      </div>

      <!-- Mock CAPTCHA -->
      <div class="mock-captcha">
        <label for="captcha">Enter the text below:</label>
        <div class="captcha-text">{{ captchaText }}</div>
        <input v-model="captchaInput" type="text" id="captcha" required />
        <p v-if="captchaError" class="error-message">{{ captchaError }}</p>
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
  <Footer :isFixed="true" />
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      username: '',
      password: '',
      captchaText: '', // CAPTCHA 文本，將在 mounted 中生成
      captchaInput: '',
      captchaError: '' // 用於顯示 CAPTCHA 錯誤信息
    };
  },
  methods: {
    generateRandomString(length) {
      const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += charset.charAt(Math.floor(Math.random() * charset.length));
      }
      return result;
    },
    generateCaptcha() {
      this.captchaText = this.generateRandomString(6);
    },
    async handleLogin() {
      this.captchaError = '';

      // 驗證 CAPTCHA
      if (this.captchaInput !== this.captchaText) {
        this.captchaError = 'CAPTCHA validation failed.';
        return;
      }

      // 硬編碼測試憑證
      const testUsername = '123';
      const testPassword = '123';

      if (this.username === testUsername && this.password === testPassword) {
        console.log('Login successful');
        this.$router.push('/RestaurantPage');
      } else {
        this.captchaError = 'Login failed. Please check your username and password.';
      }
    }
  },
  mounted() {
    this.generateCaptcha();
  }
};
</script>

<style scoped>
.login-page {
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 1.8rem;
}

form > div {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button[type="submit"] {
  background-color: #8B4513; /* 使用深橙色 */
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
}

button[type="submit"]:hover {
  background-color: #6A2E12; /* 深橙色的深色變體 */
}

.error-message {
  color: red;
}

.mock-captcha {
  margin: 10px 0;
  text-align: center; /* 讓元素居中 */
}

.captcha-text {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5px; /* 縮小間距 */
  border: 1px solid #ccc;
  padding: 5px;
  background-color: #f9f9f9;
  text-align: center;
  width: 80px; /* 縮小背景框大小 */
  margin: 0 auto 5px auto; /* 調整上下間距 */
}
</style>
