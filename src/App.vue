<template>
  <div class="nav-bar"></div>
  <div id="scroll" ref="scroll" class="scroll">
    <router-view/>
  </div>
  <tab-bar v-show="this.$route.meta.tabBar"></tab-bar>
</template>

<script>
import '@/utils/js/scroll.js'
import BScroll from 'better-scroll'
import tabBar from '@/components/tabBar'

export default {
  components: {
    tabBar,
  },
  setup() {
    const setHeight = () => {
      const el = document.getElementById("scroll")
      el.style.height=document.documentElement.clientHeight - 95 + 'px'
    }
    return { setHeight }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollbar: false,
      })
    })
    this.setHeight()
    window.onresize = () => {
      return (() => {
        this.setHeight()
      })()
    }
  },
  watch:{
    $route(to){
      if(to.path == '/search') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#fff')
      } else {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#333')
      }
    }
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
.nav-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  background-color: #333;
  transition: .3s;
  z-index: 99;
}
.bottom-seat {
  height: 80px;
  background: #f7f7f7;
}
</style>
