<template>
  <div :style="{paddingTop: hb}">
    <div id="scroll" ref="scroll" class="scroll">
      <div style="text-align: center">{{hb}}</div>
      <div style="text-align: center">{{url}}</div>
      <router-view/>
    </div>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import tabBar from '@/components/tabBar'
// import navBar from '@/components/navBar'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: {
    tabBar,
    // navBar
  },
  setup() {
    const route = useRoute()
    const store = useStore()

    onMounted(() => {
      window.vueJsGetLocation = (function(){console.log("vueJsGetLocation未绑定")})
    })

    return { }
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.scroll, {
        scrollbar: false,
      })
    })
    document.getElementById('scroll').style.height=document.documentElement.clientHeight - 55 + 'px'
    window.onresize = () => {
      return (() => {
        document.getElementById('scroll').style.height=document.documentElement.clientHeight - 55 + 'px'
      })()
    }
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: #f56c6c;
}
#app {

}
</style>
