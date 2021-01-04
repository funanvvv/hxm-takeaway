<template>
  <div class="tab-bar">
    <div :class="[ path == '/home' ? 'main-page-selected' : 'main-page']" @click="goto('/home')">外卖</div>
    <div :class="[ path == '/order' ? 'order-page-selected' : 'order-page']" @click="goto('/order')">订单</div>
    <div :class="[ path == '/info' ? 'info-page-selected' : 'info-page']" @click="goto('/info')">主页</div>
  </div>
</template>

<script>
import { watch, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default {
  setup() {
    const path = ref(undefined)
    const route = useRoute()
    const router = useRouter()

    const goto = (e) => {
      router.push({
        path: e
      })
    }

    watch(route, () => {
      path.value = route.path
    })

    return { path, goto }
  }
}
</script>

<style scoped lang="scss">
.tab-bar {
  width: 100%;
  height: 55px;
  color: #8a8a8a;
  background-color: #f8f8f8;
  border-top: .5px solid #e6e6e6;
  position: fixed;
  bottom: 0;
  z-index: 999;
  display: grid;
  grid-template: 1fr / 1fr 1fr 1fr;
  a {
    color: #8a8a8a;
    text-decoration: none;
  }
  div {
    background-position: top;
    background-size: 30px;
    background-repeat: no-repeat;
    padding-top: 35px;
    font-size: 10px;
    text-align: center;
  }
  .main-page {
    background-position: 50% 24%;
    background-image: url('../assets/cat.png');
  }
  .main-page-selected {
    color: #333;
    background-position: 50% 24%;
    background-image: url('../assets/cat-selected.png');
  }
  .order-page {
    background-size: 30px;
    background-position: 50% 14%;
    background-image: url('../assets/order.png');
  }
  .order-page-selected {
    color: #333;
    background-size: 30px;
    background-position: 50% 14%;
    background-image: url('../assets/order-selected.png');
  }
  .info-page {
    background-size: 24px;
    background-position: 50% 23%;
    background-image: url('../assets/info.png');
  }
  .info-page-selected {
    color: #333;
    background-size: 24px;
    background-position: 50% 23%;
    background-image: url('../assets/info-selected.png');
  }
}
</style>