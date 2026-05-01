import { createSSRApp } from 'vue';
import 'ant-design-vue/dist/reset.css';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);
  return {
    app
  };
}
