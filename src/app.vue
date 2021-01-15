<template>
  <nav-bar></nav-bar>
  <div id="scroll">
    <router-view/>
  </div>
  <tab-bar v-show="this.$route.meta.tabBar"></tab-bar>
</template>

<script>
import { onMounted } from 'vue'
import { useStore } from 'vuex'
import '@/utils/scroll.js'
import tabBar from '@/components/tabBar'
import navBar from '@/components/navBar'

export default {
  components: {
    tabBar,
    navBar,
  },
  setup() {
    const store = useStore()
    const setHeight = () => {
      const el = document.getElementById("scroll")
      el.style.height=document.documentElement.clientHeight - 95 + 'px'
    }

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

    return { setHeight }
  },
  mounted() {
    this.setHeight()
    window.onresize = () => {
      return (() => {
        this.setHeight()
      })()
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
#scroll {
  padding-top: 40px;
}
.container {
  height: calc(100% + 55px);
}
.bottom-seat {
  height: 80px;
  background: #f7f7f7;
}
</style>
