<!-- src/views/Settings.vue -->
<template>
  <div class="settings-container">
    <aside class="sidebar">
      <h3>Settings</h3>
      <ul>
        <li @click="selectedSetting = 'profile'">Profile</li>
        <li @click="selectedSetting = 'notifications'">Notifications</li>
        <li @click="selectedSetting = 'privacy'">Privacy Settings</li>
        <li @click="selectedSetting = 'language'">Language</li>
        <li @click="selectedSetting = 'account-security'">Account Security</li>
        <li @click="selectedSetting = 'billing'">Billing</li>
        <li @click="selectedSetting = 'subscription'">Subscription</li>
        <li @click="selectedSetting = 'integrations'">Integrations</li>
        <li @click="selectedSetting = 'logout'">Logout</li>
        <li @click="selectedSetting = 'delete-account'">Delete Account</li>
        <li @click="selectedSetting = 'help'">Help</li>
        <li @click="selectedSetting = 'contact'">Contact Us</li>

      </ul>
    </aside>
    <section class="content">
      <Profile v-if="selectedSetting === 'profile'" />
      <Notifications v-if="selectedSetting === 'notifications'" />
      <Privacy v-if="selectedSetting === 'privacy'" />
      <Language v-if="selectedSetting === 'language'" />
      <account-security-settings v-if="selectedSetting === 'account-security'" />
    </section>
    <Footer :isFixed="true" />
  </div>
</template>

<script>
import Profile from '@/components/Settings/Profile.vue';
import Notifications from '@/components/Settings/Notifications.vue';
import Privacy from '@/components/Settings/Privacy.vue';
import Language from '@/components/Settings/Language.vue';
import AccountSecuritySettings from "@/components/Settings/AccountSecurity.vue";


export default {
  name: 'SettingsPage',
  components: {
    AccountSecuritySettings,
    Profile,
    Notifications,
    Privacy,
    Language
  },
  data() {
    return {
      selectedSetting: 'profile', // 預設顯示的頁面
    };
  },
};
</script>

<style scoped>
.settings-container {
  display: flex;
}
.sidebar {
  width: 200px;
  background-color: #f4f4f4;
  padding: 20px;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar li {
  margin: 10px 0;
  cursor: pointer;
  color: #333;
}
.sidebar li:hover {
  color: #007BFF;
}
.content {
  flex: 1;
  padding: 20px;
}
</style>
