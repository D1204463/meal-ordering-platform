import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入 Vue Router 配置

const app = createApp(App);
app.use(router); // 使用 Vue Router
app.mount('#app');
