<!-- src/components/Settings/Privacy.vue -->
<template>
  <div class="privacy-settings">
    <h2>隱私設置</h2>
    <form @submit.prevent="savePrivacySettings">
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="dataSharing" />
          允許與合作夥伴共享數據
        </label>
      </div>
      <div class="form-group">
        <label>
          <input type="checkbox" v-model="tracking" />
          啟用個性化廣告跟蹤
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
        alert('隱私設置保存成功。');
      } catch (error) {
        console.error('保存隱私設置失敗。');
      }
    }
  },
};
</script>

<style scoped>
.privacy-settings {
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
