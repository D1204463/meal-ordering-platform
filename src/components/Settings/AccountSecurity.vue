<!-- src/components/Settings/AccountSecurity.vue -->
<template>
  <div class="account-security-settings">
    <h2>帳戶安全設置</h2>

    <!-- 更改密碼 -->
    <form @submit.prevent="changePassword">
      <div class="form-group">
        <label for="current-password">當前密碼:</label>
        <input v-model="currentPassword" type="password" id="current-password" required />
      </div>
      <div class="form-group">
        <label for="new-password">新密碼:</label>
        <input v-model="newPassword" type="password" id="new-password" required />
      </div>
      <div class="form-group">
        <label for="confirm-password">確認新密碼:</label>
        <input v-model="confirmPassword" type="password" id="confirm-password" required />
      </div>
      <div class="form-actions">
        <button type="submit">更改密碼</button>
      </div>
      <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
    </form>

    <!-- 雙重身份驗證 -->
    <div class="two-factor-auth">
      <h3>雙重身份驗證</h3>
      <button @click="toggleTwoFactorAuth">{{ twoFactorEnabled ? '禁用' : '啟用' }} 雙重身份驗證</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccountSecuritySettings',
  data() {
    return {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
      passwordError: '',
      twoFactorEnabled: false
    };
  },
  methods: {
    changePassword() {
      // 更改密碼邏輯
    },
    toggleTwoFactorAuth() {
      this.twoFactorEnabled = !this.twoFactorEnabled;
    }
  }
};
</script>

<style scoped>
.account-security-settings {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.form-group label {
  flex: 0 0 150px;
  margin-right: 10px;
  text-align: right;
  font-weight: bold;
}

.form-group input {
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
}

button {
  padding: 10px 20px;
  font-size: 14px;
  color: white;
  background-color: #8B4513;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #a0522d;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
