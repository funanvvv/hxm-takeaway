<template>
  <div class="nav-bar" :style="{height: sbh + 'px'}"></div>
</template>

<script>
export default {
  data() {
    return {
      sbh: this.$store.state.userConfig || 40
    }
  },
  watch:{
    $route(to){
      if(to.path == '/search') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#fff')
      } else if(to.path == '/info') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#f7f7f7')
        document.getElementsByClassName('nav-bar')[0].style.setProperty('transition', '0s')
      } else if(to.path == '/shop') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#f7f7f7')
        document.getElementsByClassName('nav-bar')[0].style.setProperty('transition', '0s')
      } else {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#333')
        document.getElementsByClassName('nav-bar')[0].style.setProperty('transition', '.3s')
      }
    }
  },
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  position: fixed;
  background-color: #333;
  transition: .3s;
  z-index: 99;
}
</style>