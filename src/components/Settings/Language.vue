<!-- src/components/Settings/Language.vue -->
<template>
  <div>
    <h2>Language Settings</h2>
    <form @submit.prevent="saveLanguage">
      <div>
        <label for="language">Select Language:</label>
        <select v-model="selectedLanguage" id="language" required>
          <option v-for="lang in languages" :key="lang.code" :value="lang.code">{{ lang.name }}</option>
        </select>
      </div>
      <button type="submit">Save</button>
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
};
</script>

<style scoped>
/* Add styles for language settings */
</style>
