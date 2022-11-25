import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { ImageUtil } from './utils/imageUtil'
console.log(import.meta.env.VITE_AGE)
ImageUtil.storageImageList()
console.log(ImageUtil.imageList)
createApp(App).mount('#app')
