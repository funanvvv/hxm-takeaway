<template>
  <div class="shop-food-list">
    <van-sticky>
      a
    </van-sticky>
    <div class="shop-food-item" v-for="(item, index) in list" :key="index">
      {{item.name}}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const list = ref([{
      name: 'zzzzzzzzz'
    },{
      name: 'zxzxxxxxx'
    }])
    return { list }
  }
}
</script>

<style lang="scss">
.shop-food-list {
  overflow-y: auto;
  width: calc(100% - 80px);
  .shop-food-item {
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    background: #f7f7f7;
  }
}
</style>