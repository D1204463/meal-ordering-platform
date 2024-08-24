<!-- src/components/Settings/Profile.vue -->
<template>
  <div>
    <h2>Profile Settings</h2>
    <form @submit.prevent="saveProfile">
      <div>
        <label for="name">Name:</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input v-model="phone" type="tel" id="phone" />
      </div>
      <div>
        <label for="address">Address:</label>
        <textarea v-model="address" id="address"></textarea>
      </div>
      <div>
        <label for="city">City:</label>
        <input v-model="city" type="text" id="city" />
      </div>
      <div>
        <label for="country">Country:</label>
        <input v-model="country" type="text" id="country" />
      </div>
      <div>
        <label for="profile-picture">Profile Picture:</label>
        <input type="file" id="profile-picture" />
      </div>
      <div>
      <button type="submit">Save</button>
        <button type="reset">Reset</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ProfileSettings',
  data() {
    return {
      name: '',
      email: '',
      phone: ''

    };  },      methods: {  async saveProfile() {
      try {
        await this.$axios.post('/api/save-profile', {
          name: this.name,
          email: this.email,
          phone: this.phone

        });
        alert('Profile settings saved successfully.');
      } catch (error) {
        console.error('Failed to save profile settings.');
      }
    } },};


</script>

<style scoped>
/* Add styles for profile settings */
</style>
