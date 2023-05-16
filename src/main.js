import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/index.js'
import Store from './store/index.js'
import loadImage from './plugins/loadImage.js'
// 해당폴더를 가져올떄 index란 이름을 불러올땐 이름 생략가능 ex) './routes'

createApp(App).use(router).use(loadImage).use(Store).mount('#app')