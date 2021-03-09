import { createApp } from 'vue'
import App from './App.vue'
import './style/reset.scss'
import 'vant/lib/index.css'; // 全局引入样式
import './style/common.scss'
import './rem'
import Vant from 'vant';
// 挂载路由
import router from "./router";


createApp(App)
.use(Vant)
.use(router)
.mount('#app')
