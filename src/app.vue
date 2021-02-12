<template>
  <div id="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component v-if='$route.meta.keepAlive' :is="Component" />
      </keep-alive>
      <component v-if='!$route.meta.keepAlive' :is="Component" />
    </router-view>
  </div>
  <tab-bar v-show="this.$route.meta.tabBar"></tab-bar>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import '@/utils/scroll.js'
import tabBar from '@/components/tabBar'

export default {
  components: {
    tabBar,
  },
  setup() {
    const store = useStore()

    onMounted(() => {
      if(document.cookie) {
        let cookiePhone
        let cookieToken
        try {
          cookiePhone = document.cookie.split("phoneNumber")[1].split(";")[0].split("=")[1]
          cookieToken = document.cookie.split("token")[1].split(";")[0].split("=")[1]
        } catch(e) {
          console.log(e)
        }
        if(cookiePhone) {
          store.commit('SET_USER_PHONE', cookiePhone)
          store.commit('SET_USER_TOKEN', cookieToken)
        }
      }
    })

    return { 

    }
  },
}
</script>

<style lang="scss">
//禁用长按选中文本
@import '@/scss/vant.scss';
* {
  -webkit-touch-callout:none;
  -webkit-user-select:none;
  -khtml-user-select:none;
  -moz-user-select:none;
  -ms-user-select:none;
  user-select:none;
}
body {
  margin: 0;
  background: #333;
}
.container {
  min-height: calc(100vh - 55px);
}
.bottom-seat {
  height: 80px;
  background: #f7f7f7;
}
</style>
