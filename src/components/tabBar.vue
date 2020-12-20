<template>
  <div class="tab-bar">
    <router-link to="/home">
      <div :class="[ path == '/home' ? 'main-page-selected' : 'main-page']">外卖</div>
    </router-link>
    <router-link to="/order">
      <div :class="[ path == '/order' ? 'order-page-selected' : 'order-page']">订单</div>
    </router-link>
    <router-link to="/info">
      <div :class="[ path == '/info' ? 'info-page-selected' : 'info-page']">主页</div>
    </router-link>
  </div>
</template>

<script>
import { watch, ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const path = ref(undefined)
    const route = useRoute()
    // const router = useRouter()

    watch(route, () => {
      path.value = route.path
    })

    return {path}
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
    background-size: 35px;
    background-repeat: no-repeat;
    padding-top: 35px;
    font-size: 12px;
    text-align: center;
  }
  .main-page {
    background-position: 50% 10%;
    background-image: url('../assets/cat.png');
  }
  .main-page-selected {
    color: #f56c6c;
    background-position: 50% 10%;
    background-image: url('../assets/cat-selected.png');
  }
  .order-page {
    background-image: url('../assets/order.png');
  }
  .order-page-selected {
    color: #f56c6c;
    background-image: url('../assets/order-selected.png');
  }
  .info-page {
    background-size: 28px;
    background-position: 50% 10%;
    background-image: url('../assets/info.png');
  }
  .info-page-selected {
    color: #f56c6c;
    background-size: 28px;
    background-position: 50% 10%;
    background-image: url('../assets/info-selected.png');
  }
}
</style>