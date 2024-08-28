<!-- src/components/Settings/Notifications.vue -->
<template>
  <div class="notifications-settings">
    <h2>通知設置</h2>
    <form @submit.prevent="saveNotificationsSettings">
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="emailNotifications" />
          電子郵件通知
        </label>
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="smsNotifications" />
          短信通知
        </label>
      </div>
      <div class="form-actions">
        <button type="submit">保存</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'NotificationsSettings',
  data() {
    return {
      emailNotifications: false,
      smsNotifications: false
    };
  },
  methods: {
    async saveNotificationsSettings() {
      try {
        await this.$axios.post('/api/save-notifications', {
          emailNotifications: this.emailNotifications,
          smsNotifications: this.smsNotifications
        });
        alert('通知設置保存成功。');
      } catch (error) {
        console.error('保存通知設置失敗。');
      }
    }
  },
};
</script>

<style scoped>
.notifications-settings {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.form-group input[type="checkbox"] {
  margin-right: 10px;
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
</style>
