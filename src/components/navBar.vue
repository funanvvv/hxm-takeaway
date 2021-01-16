<template>
  <div class="nav-bar"></div>
</template>

<script>
export default {
  watch:{
    $route(to){
      if(to.path == '/search') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#fff')
      } else if(to.path == '/login') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#fafafa')
        document.getElementsByClassName('nav-bar')[0].style.setProperty('transition', '0s')
      } else if(to.path == '/home') {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#333')
        document.getElementsByClassName('nav-bar')[0].style.setProperty('transition', '.3s')
      } else {
        document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#f7f7f7')
        document.getElementsByClassName('nav-bar')[0].style.setProperty('transition', '0s')
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