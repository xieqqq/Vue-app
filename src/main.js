import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'; // 导入 Element Plus 主题样式


createApp(App).use(router).use(ElementPlus).mount('#app')


