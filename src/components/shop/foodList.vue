<template>
  <div class="shop-food-list">
    <div
      class="shop-food-item"
      v-for="(item, index) in list.list[list.index].items"
      :key="index"
    >
      {{item.name}}
    </div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
  setup() {
    const list = inject('list')
    onMounted(() => {
      console.log(list.list)
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
  padding-bottom: 100px;
  .shop-food-item {
    height: 80px;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
  }
}
</style>