<!-- src/components/Settings/Profile.vue -->
<template>
  <div class="profile-settings">
    <h2>個人資料設置</h2>
    <form @submit.prevent="saveProfile">
      <div class="form-group">
        <label for="name">姓名:</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">電子郵件:</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="phone">電話:</label>
        <input v-model="phone" type="tel" id="phone" />
      </div>
      <div class="form-group">
        <label for="address">地址:</label>
        <textarea v-model="address" id="address"></textarea>
      </div>
      <div class="form-group">
        <label for="city">城市:</label>
        <input v-model="city" type="text" id="city" />
      </div>
      <div class="form-group">
        <label for="country">國家:</label>
        <input v-model="country" type="text" id="country" />
      </div>
      <div class="form-group">
        <label for="profile-picture">個人照片:</label>
        <input type="file" id="profile-picture" />
      </div>
      <div class="form-actions">
        <button type="submit">保存</button>
        <button type="reset">重置</button>
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
      phone: '',
      address: '',
      city: '',
      country: ''
    };
  },
  methods: {
    async saveProfile() {
      try {
        await this.$axios.post('/api/save-profile', {
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          city: this.city,
          country: this.country
        });
        alert('個人資料設置保存成功。');
      } catch (error) {
        console.error('保存個人資料設置失敗。');
      }
    }
  }
};
</script>

<style scoped>
.profile-settings {
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
  flex: 0 0 120px;
  margin-right: 10px;
  text-align: right;
  font-weight: bold;
}

.form-group input,
.form-group textarea {
  flex: 1;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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
