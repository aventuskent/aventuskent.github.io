import { createApp } from 'vue';
import './css.css';
import 'github-markdown-css';
import router from '@/router';
import App from './App.vue';

createApp(App).use(router).mount('#app');
