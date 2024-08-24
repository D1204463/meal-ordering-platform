<template>
  <div class="register-page">
    <h1>User Registration</h1>
    <form @submit.prevent="handleRegister">
      <!-- Profile Picture -->
      <div class="form-group">
        <label for="profilePicture">Profile Picture:</label>
        <input
            type="file"
            id="profilePicture"
            @change="handleFileChange"
            :class="{ 'is-invalid': profilePictureError }"
        />
        <div v-if="profilePictureError" class="error-feedback">{{ profilePictureError }}</div>
      </div>

      <!-- Username -->
      <div class="form-group">
        <label for="username">Username:</label>
        <input
            type="text"
            id="username"
            v-model="username"
            required
            :class="{ 'is-invalid': usernameError }"
        />
        <div v-if="usernameError" class="error-feedback">{{ usernameError }}</div>
      </div>

      <!-- Email -->
      <div class="form-group">
        <label for="email">Email:</label>
        <input
            type="email"
            id="email"
            v-model="email"
            required
            :class="{ 'is-invalid': emailError }"
        />
        <div v-if="emailError" class="error-feedback">{{ emailError }}</div>
      </div>

      <!-- Chinese Name -->
      <div class="form-group">
        <label for="chineseName">Chinese Name:</label>
        <input
            type="text"
            id="chineseName"
            v-model="chineseName"
            required
            :class="{ 'is-invalid': chineseNameError }"
        />
        <div v-if="chineseNameError" class="error-feedback">{{ chineseNameError }}</div>
      </div>

      <!-- Address -->
      <div class="form-group">
        <label for="address">Address:</label>
        <input
            type="text"
            id="address"
            v-model="address"
            required
            :class="{ 'is-invalid': addressError }"
        />
        <div v-if="addressError" class="error-feedback">{{ addressError }}</div>
      </div>

      <!-- Phone Number -->
      <div class="form-group">
        <label for="phone">Phone Number:</label>
        <input
            type="tel"
            id="phone"
            v-model="phone"
            required
            :class="{ 'is-invalid': phoneError }"
        />
        <div v-if="phoneError" class="error-feedback">{{ phoneError }}</div>
      </div>

      <!-- Password -->
      <div class="form-group">
        <label for="password">Password:</label>
        <input
            type="password"
            id="password"
            v-model="password"
            required
            :class="{ 'is-invalid': passwordError }"
        />
        <div v-if="passwordError" class="error-feedback">{{ passwordError }}</div>
      </div>

      <!-- Confirm Password -->
      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            :class="{ 'is-invalid': confirmPasswordError }"
        />
        <div v-if="confirmPasswordError" class="error-feedback">{{ confirmPasswordError }}</div>
      </div>

      <!-- CAPTCHA -->
      <div class="form-group captcha-group">
        <label for="captcha">Enter the code:</label>
        <div class="captcha">
          <span class="captcha-code">{{ captchaCode }}</span>
          <button type="button" @click="generateCaptcha">Refresh</button>
        </div>
        <input
            type="text"
            id="captcha"
            v-model="captchaInput"
            required
            :class="{ 'is-invalid': captchaError }"
        />
        <div v-if="captchaError" class="error-feedback">{{ captchaError }}</div>
      </div>

      <button type="submit" :disabled="isLoading" class="register-button">
        {{ isLoading ? 'Registering...' : 'Register' }}
      </button>
    </form>

    <!-- Success message -->
    <div v-if="successMessage" class="success-message">
      {{ successMessage }}
    </div>

    <!-- Error message -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
    </div>

    <router-link to="/menu">
      <button class="menu-button">Menu</button>
    </router-link>
  </div>
  <Footer :isFixed="true" />
</template>

<script>
export default {
  name: 'UserRegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      chineseName: '',
      address: '',
      phone: '',
      profilePicture: null,
      captchaCode: '',
      captchaInput: '',
      successMessage: '',
      errorMessage: '',
      usernameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
      chineseNameError: '',
      addressError: '',
      phoneError: '',
      profilePictureError: '',
      captchaError: '',
      isLoading: false,
    };
  },
  methods: {
    async handleRegister() {
      this.resetErrors();
      if (!this.validateForm()) return;
      this.isLoading = true;
      try {
        setTimeout(() => {
          this.successMessage = 'Registration successful!';
          this.errorMessage = '';
          this.isLoading = false;
          setTimeout(() => {
            this.$router.push('/login');
          }, 2000);
        }, 1000);
      } catch (error) {
        this.handleError(error);
      } finally {
        this.isLoading = false;
      }
    },

    handleFileChange(event) {
      const file = event.target.files[0];
      if (file && file.size <= 2 * 1024 * 1024) {
        this.profilePicture = file;
        this.profilePictureError = '';
      } else {
        this.profilePictureError = 'File size must be less than 2MB.';
      }
    },

    validateForm() {
      let isValid = true;
      if (this.username.length < 3) {
        this.usernameError = 'Username must be at least 3 characters long.';
        isValid = false;
      } else if (!this.isUniqueUsername(this.username)) {
        this.usernameError = 'Username is already taken.';
        isValid = false;
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(this.email)) {
        this.emailError = 'Invalid email address.';
        isValid = false;
      } else if (!this.isUniqueEmail(this.email)) {
        this.emailError = 'Email is already registered.';
        isValid = false;
      }
      if (this.password.length < 6) {
        this.passwordError = 'Password must be at least 6 characters long.';
        isValid = false;
      } else if (!this.isStrongPassword(this.password)) {
        this.passwordError = 'Password must include uppercase, lowercase, number, and special character.';
        isValid = false;
      }
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = 'Passwords do not match.';
        isValid = false;
      }
      if (!this.chineseName) {
        this.chineseNameError = 'Chinese name is required.';
        isValid = false;
      }
      if (!this.address) {
        this.addressError = 'Address is required.';
        isValid = false;
      }
      const phonePattern = /^[0-9]{10}$/;
      if (!phonePattern.test(this.phone)) {
        this.phoneError = 'Phone number must be 10 digits long.';
        isValid = false;
      }
      if (this.captchaInput !== this.captchaCode) {
        this.captchaError = 'Invalid CAPTCHA code.';
        isValid = false;
      }
      return isValid;
    },
    generateCaptcha() {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      let code = '';
      for (let i = 0; i < 6; i++) {
        code += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      this.captchaCode = code;
    },
    isUniqueUsername(username) {
      const existingUsernames = ['user1', 'admin', 'guest'];
      return !existingUsernames.includes(username);
    },
    isUniqueEmail(email) {
      const existingEmails = ['user1@example.com', 'admin@example.com'];
      return !existingEmails.includes(email);
    },
    isStrongPassword(password) {
      const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
      return strongPasswordPattern.test(password);
    },
    resetErrors() {
      this.usernameError = '';
      this.emailError = '';
      this.passwordError = '';
      this.confirmPasswordError = '';
      this.chineseNameError = '';
      this.addressError = '';
      this.phoneError = '';
      this.profilePictureError = '';
      this.captchaError = '';
    },
    handleError(error) {
      this.errorMessage = 'Registration failed. Please try again.';
      this.successMessage = '';
      console.error(error);
    },
  },
  mounted() {
    this.generateCaptcha();
  },
};
</script>

<style scoped>
.register-page {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="file"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

input.is-invalid {
  border-color: red;
}

.error-feedback {
  color: red;
  font-size: 0.9em;
}

.captcha-group {
  display: flex;
  align-items: center;
}

.captcha {
  display: flex;
  align-items: center;
}

.captcha-code {
  background-color: #f0f0f0;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #0056b3;
}

button:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}

.register-button {
  display: block;
  width: 100%;
  margin-top: 20px;
}

.success-message {
  margin-top: 20px;
  color: green;
  text-align: center;
}

.error-message {
  margin-top: 20px;
  color: red;
  text-align: center;
}

.menu-button {
  display: block;
  width: 100%;
  margin-top: 10px;
  background-color: #28a745;
}

.menu-button:hover {
  background-color: #218838;
}

</style>
