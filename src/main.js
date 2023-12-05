import { createApp } from 'vue'
import './style.css'
import VueChatbot from 'vue-simple-chatbot';
import App from './App.vue'

const app = createApp(App);

app.use(VueChatbot);

app.mount('#app');
