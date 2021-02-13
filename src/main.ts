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
  Field, Lazyload,
  PasswordInput,
  NumberKeyboard,
  Toast, Button,
  SubmitBar, Loading
} from 'vant';

createApp(App)
  .use(store)
  .use(router)
  .use(DropdownMenu).use(DropdownItem).use(VanImage)
  .use(Icon).use(PullRefresh).use(Tab).use(Tabs)
  .use(Sidebar).use(SidebarItem).use(Sticky)
  .use(Field).use(Lazyload, {lazyComponent: true})
  .use(Button).use(PasswordInput).use(NumberKeyboard)
  .use(Toast).use(SubmitBar).use(Loading)
  .mount('#app')