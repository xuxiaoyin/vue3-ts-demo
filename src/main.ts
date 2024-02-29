import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'
import Loading from './plugin/Loading'

const app = createApp(App)

app.use(Loading)

type Lod = {
  show: () => void,
  hide: () => void
}
//编写ts loading 声明文件放置报错 和 智能提示
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $myLoading: Lod
  }
}

app.use(router)
app.mount('#app')
