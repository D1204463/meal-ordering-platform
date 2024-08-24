<!-- src/components/Settings/AccountSecurity.vue -->
<template>
  <div>
    <h2>Account Security Settings</h2>

    <!-- Change Password -->
    <form @submit.prevent="changePassword">
      <div>
        <label for="current-password">Current Password:</label>
        <input v-model="currentPassword" type="password" id="current-password" required />
      </div>
      <div>
        <label for="new-password">New Password:</label>
        <input v-model="newPassword" type="password" id="new-password" required />
      </div>
      <div>
        <label for="confirm-password">Confirm New Password:</label>
        <input v-model="confirmPassword" type="password" id="confirm-password" required />
      </div>
      <button type="submit">Change Password</button>
      <p v-if="passwordError" class="error-message">{{ passwordError }}</p>
    </form>

    <!-- Two-Factor Authentication -->
    <div class="two-factor-auth">
      <h3>Two-Factor Authentication</h3>
      <button @click="toggleTwoFactorAuth">{{ twoFactorEnabled ? 'Disable' : 'Enable' }} Two-Factor Authentication</button>
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
      twoFactorEnabled: false }}}

</script>

<style scoped>
/* Add styles for the account security settings */
</style>
