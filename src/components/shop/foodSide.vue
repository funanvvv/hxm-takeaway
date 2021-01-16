<template>
  <div class="shop-food-side position">
    <div 
      class="side-item"
      v-for="(item, index) in list.list"
      :class="[index==list.index?'selected':'']"
      :key="index"
      @click="list.onChange(index)"
    >
      {{item.title}}
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
export default {
  setup() {
    const list = inject('list')

    return {
      list,
    }
  }
}
</script>

<style lang="scss">
.shop-food-side {
  font-size: 12px;
  float: left;
  width: 80px;
  height: 100%;
  background: #f7f7f7;
  .side-item {
    text-align: center;
    padding: 20px 0;
    &.selected {
      background: #fff;
    }
  }
}
.position {
  position: absolute;
  top: 49px;
}
</style>