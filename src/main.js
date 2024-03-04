import { createApp } from 'vue'
import { createPinia } from "pinia";
import 'element-plus/dist/index.css'
import router from './router'
import App from './App.vue'
// import 'element-plus/lib/theme-chalk/index.css';
import ElementPlus from 'element-plus';
// import Antd from 'ant-design-vue';
// import 'ant-design-vue/dist/antd.css'; 
import 'ant-design-vue/dist/antd.less'; 

import './style.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus);
// app.use(Antd)
router.isReady().then(() => app.mount('#app'))
app.config.warnHandler = () => null
