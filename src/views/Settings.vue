<!-- src/views/Settings.vue -->
<template>
  <div class="settings-container">
    <aside class="sidebar">
      <h3>設定</h3>
      <ul>
        <li @click="selectedSetting = 'profile'" :class="{ active: selectedSetting === 'profile' }">個人資料</li>
        <li @click="selectedSetting = 'notifications'" :class="{ active: selectedSetting === 'notifications' }">通知設置</li>
        <li @click="selectedSetting = 'privacy'" :class="{ active: selectedSetting === 'privacy' }">隱私設置</li>
        <li @click="selectedSetting = 'language'" :class="{ active: selectedSetting === 'language' }">語言設置</li>
        <li @click="selectedSetting = 'account-security'" :class="{ active: selectedSetting === 'account-security' }">帳戶安全</li>
        <li @click="selectedSetting = 'billing'" :class="{ active: selectedSetting === 'billing' }">帳單</li>
        <li @click="selectedSetting = 'subscription'" :class="{ active: selectedSetting === 'subscription' }">訂閱</li>
        <li @click="selectedSetting = 'integrations'" :class="{ active: selectedSetting === 'integrations' }">整合</li>
        <li @click="selectedSetting = 'delete-account'" :class="{ active: selectedSetting === 'delete-account' }">刪除帳戶</li>
        <li @click="selectedSetting = 'help'" :class="{ active: selectedSetting === 'help' }">幫助</li>
        <li @click="selectedSetting = 'contact'" :class="{ active: selectedSetting === 'contact' }">聯繫我們</li>
      </ul>
    </aside>
    <section class="content">
      <Profile v-if="selectedSetting === 'profile'" />
      <Notifications v-if="selectedSetting === 'notifications'" />
      <Privacy v-if="selectedSetting === 'privacy'" />
      <Language v-if="selectedSetting === 'language'" />
      <AccountSecuritySettings v-if="selectedSetting === 'account-security'" />
      <!-- Add components for other settings here -->
    </section>
    <Footer :isFixed="true" />
  </div>
</template>

<script>
import Profile from '@/components/Settings/Profile.vue';
import Notifications from '@/components/Settings/Notifications.vue';
import Privacy from '@/components/Settings/Privacy.vue';
import Language from '@/components/Settings/Language.vue';
import AccountSecuritySettings from '@/components/Settings/AccountSecurity.vue';

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
  min-height: 100vh;
}

.sidebar {
  width: 220px;
  background-color: #f4f4f4;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
}

.sidebar h3 {
  margin-top: 0;
  font-size: 22px;
  font-weight: bold;
  color: #333;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  padding: 10px;
  margin: 5px 0;
  cursor: pointer;
  color: #333;
  border-radius: 4px;
}

.sidebar li.active, .sidebar li:hover {
  background-color: #007BFF;
  color: white;
}

.content {
  flex: 1;
  padding: 20px;
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
</style>
