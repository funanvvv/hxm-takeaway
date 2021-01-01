<template>
  <nav-bar></nav-bar>
  <div id="scroll">
    <router-view/>
  </div>
  <tab-bar v-show="this.$route.meta.tabBar"></tab-bar>
</template>

<script>
import '@/utils/js/scroll.js'
import tabBar from '@/components/tabBar'
import navBar from '@/components/navBar'

export default {
  components: {
    tabBar,
    navBar,
  },
  setup() {
    const setHeight = () => {
      const el = document.getElementById("scroll")
      el.style.height=document.documentElement.clientHeight - 95 + 'px'
    }
    return { setHeight }
  },
  mounted() {
    this.setHeight()
    window.onresize = () => {
      return (() => {
        this.setHeight()
      })()
    }
    const sbh = this.$route.query.sbh
    console.log(sbh)
    console.log(window.location)
    this.$store.commit('SET_USER_CONFIG', sbh)
    console.log(this.$store.state.userConfig)
  },
}
</script>

<style lang="scss">
//禁用长按选中文本
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
