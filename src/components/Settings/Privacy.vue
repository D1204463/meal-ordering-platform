<!-- src/components/Settings/Privacy.vue -->
<template>
  <div>
    <h2>Privacy Settings</h2>
    <form @submit.prevent="savePrivacySettings">
      <div>
        <label>
          <input type="checkbox" v-model="dataSharing" />
          Allow data sharing with partners
        </label>
      </div>
      <div>
        <label>
          <input type="checkbox" v-model="tracking" />
          Enable tracking for personalized ads
        </label>
      </div>
      <button type="submit">Save</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'PrivacySettings',
  data() {
    return {
      dataSharing: false,
      tracking: false
    };
  },
  methods: {
    async savePrivacySettings() {
      try {
        await this.$axios.post('/api/save-privacy', {
          dataSharing: this.dataSharing,
          tracking: this.tracking
        });
        alert('Privacy settings saved successfully.');
      } catch (error) {
        console.error('Failed to save privacy settings.');
      }
    }
  },
};
</script>

<style scoped>
/* Add styles for privacy settings */
</style>
