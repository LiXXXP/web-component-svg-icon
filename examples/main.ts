import { createApp } from 'vue'
// import router from './router'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'

import WebComponent from '~/index' // 开发
import '~/theme-default/index.scss' // 开发

import 'virtual:svg-icons-register'

// import WebComponent from '../lib' // 测试
// import '../lib/theme-default/index.css' // 测试

createApp(App).use(ElementPlus, { locale }).use(WebComponent).mount('#app')
