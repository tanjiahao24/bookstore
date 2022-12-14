import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import { createApp } from 'vue'
import '@/assets/css/index.css'
import App from './App.vue'
import { ImageUtil } from './utils/imageUtil'
import router from '@/router'
import store from '@/store'

console.log(import.meta.env.VITE_AGE)
ImageUtil.storageImageList()
console.log(ImageUtil.imageList)
createApp(App).use(router).use(store).use(ElementPlus, { size: 'small' }).mount('#app')
