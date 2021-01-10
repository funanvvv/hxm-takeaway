import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import store from './store'
import { 
  DropdownMenu,
  DropdownItem,
  Image as VanImage,
  Icon, PullRefresh,
  Tab, Tabs, Sticky,
  Sidebar, SidebarItem,
  Field,
} from 'vant';

createApp(App)
  .use(store)
  .use(router)
  .use(DropdownMenu).use(DropdownItem).use(VanImage)
  .use(Icon).use(PullRefresh).use(Tab).use(Tabs)
  .use(Sidebar).use(SidebarItem).use(Sticky)
  .use(Field)
  .mount('#app')