<!-- src/components/Settings/Language.vue -->
<template>
  <div class="language-settings">
    <h2>語言設置</h2>
    <form @submit.prevent="saveLanguage">
      <div class="form-group">
        <label for="language">選擇語言:</label>
        <select v-model="selectedLanguage" id="language" required>
          <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
        </select>
      </div>
      <div class="form-actions">
        <button type="submit">保存</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LanguageSettings',
  data() {
    return {
      selectedLanguage: 'en', // Default language
      languages: [
        { code: 'en', name: 'English' },
        { code: 'es', name: 'Spanish' },
        { code: 'fr', name: 'French' }
      ]
    };
  },
  methods: {
    async saveLanguage() {
      try {
        await this.$axios.post('/api/save-language', {
          language: this.selectedLanguage
        });
        alert('語言設置保存成功。');
      } catch (error) {
        console.error('保存語言設置失敗。');
      }
    }
  }
};
</script>

<style scoped>
.language-settings {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}

.form-group label {
  flex: 0 0 150px;
  margin-right: 10px;
  text-align: right;
  font-weight: bold;
}

.form-group select {
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
</style>
