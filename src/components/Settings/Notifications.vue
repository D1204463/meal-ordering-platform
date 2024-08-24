<!-- src/components/Settings/Notifications.vue -->
<template>
  <div>
    <h2>Notifications Settings</h2>
    <form @submit.prevent="saveNotificationsSettings">
      <div>
        <label>
          <input type="checkbox" v-model="emailNotifications" />
          Email Notifications
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="smsNotifications" />
          SMS Notifications
        </label>
      </div>
      <button type="submit">Save</button>
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
        alert('Notification settings saved successfully.');
      } catch (error) {
        console.error('Failed to save notification settings.');
      }
    }
  },
};
</script>

<style scoped>
/* Add styles for notifications settings */
</style>
