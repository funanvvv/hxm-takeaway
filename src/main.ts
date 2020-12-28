import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import {
  ElInput,
  ElButton,
  ElAvatar
} from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import { 
  DropdownMenu,
  DropdownItem,
  Image as VanImage,
  Icon, PullRefresh,
} from 'vant';

createApp(App)
  .use(store)
  .use(router)
  .component(ElInput.name, ElInput).component(ElButton.name, ElButton).component(ElAvatar.name, ElAvatar)
  .use(DropdownMenu).use(DropdownItem).use(VanImage).use(Icon).use(PullRefresh)
  .mount('#app')