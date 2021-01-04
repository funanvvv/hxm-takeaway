<template>
  <div class="shop-food-list">
    <div>
      <div class="shop-food-item" v-for="(item, index) in list.theList" :key="index">
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
  setup() {
    const list = inject('list')
    onMounted(() => {
      console.log(list.theList)
    })
    return {
      list,
    }
  }
}
</script>

<style lang="scss">
.shop-food-list {
  margin-left: 80px;
  overflow-y: auto;
  width: calc(100% - 80px);
  .shop-food-item {
    height: 80px;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    background: #f7f7f7;
  }
}
</style>