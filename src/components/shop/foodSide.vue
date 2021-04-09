<template>
  <div class="shop-food-side position">
    <div 
      class="side-item"
      v-for="(item, index) in list.class"
      :class="[item.id==list.index?'selected':'']"
      :key="index"
      @click="list.onChange(index)"
    >
      {{item.name}}
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
  .side-item {
    text-align: center;
    padding: 20px 0;
    &.selected {
      background: #f7f7f7;
    }
  }
}
.position {
  position: absolute;
  top: 49px;
}
</style>