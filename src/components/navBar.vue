<template>
  <div class="nav-bar"></div>
</template>

<script>
export default {
  watch:{
    $route(to){
      if(to.path == '/search') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#fff')
      } else if(to.path == '/info') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#f7f7f7')
      } else {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#333')
      }
    }
  },
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  background-color: #333;
  transition: .3s;
  z-index: 99;
}
</style>