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
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
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
      captchaText: '', // Will be generated in mounted
      captchaInput: '',
      errorMessage: '',
      captchaError: ''
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

      // Check CAPTCHA
      if (this.captchaInput !== this.captchaText) {
        this.captchaError = 'CAPTCHA validation failed.';
        return;
      }

      // Hardcoded test credentials
      const testUsername = '123';
      const testPassword = '123';

      if (this.username === testUsername && this.password === testPassword) {
        console.log('Login successful');
        this.$router.push('/RestaurantPage');
      } else {
        this.errorMessage = 'Login failed. Please check your username and password.';
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
input[type="password"],
input[type="submit"] {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button[type="submit"] {
  background-color: #007bff;
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
  background-color: #0056b3;
}

.error-message {
  color: red;
}

.mock-captcha {
  margin: 10px 0;
}

.captcha-text {
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  padding: 5px;
  background-color: #f9f9f9;
  text-align: center;
  width: 100px;
  margin: 0 auto 10px auto;
}
</style>
