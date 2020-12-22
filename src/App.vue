<template>
  <div class="nav-bar"></div>
  <div id="scroll" ref="scroll" class="scroll">
    <router-view/>
  </div>
  <tab-bar></tab-bar>
</template>

<script>
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
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #333;
}
.nav-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  background-color: #333;
}
</style>
