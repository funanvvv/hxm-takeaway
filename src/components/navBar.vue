<template>
  <div class="nav-bar"></div>
</template>

<script>
import { onMounted, ref } from 'vue'
export default {
  props: {
    color: {
      default: '#f7f7f7'
    }
  },
  setup(props) {
    const color = ref(props.color)

    onMounted(() => {
      document.getElementsByClassName('nav-bar')[0].style.backgroundColor = color.value
    })
  },
}
</script>

<style scoped lang="scss">
.nav-bar {
  width: 100%;
  height: 40px;
  position: fixed;
  background-color: #333;
  z-index: 99;
}
</style>