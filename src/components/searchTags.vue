<template>
  <div class="tags-wrap">
    <div :class="[item.hot ? 'tag-hot' : 'tag-normal']"
      v-for="(item, index) in tags" :key="index" class="tag"
    >
      {{item.content}}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    data: Array
  },
  setup(props) {
    const tags = ref(props.data)
    return { tags }
  }
}
</script>

<style scoped lang="scss">
.tags-wrap {
  padding: 0 15px;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  .tag {
    padding: 3px 10px;
    font-size: 10px;
    border-radius: 11px;
    margin-bottom: 5px;
    &.tag-normal {
      background-color: #eee;
      color: #333;
    }
    &.tag-hot {
      padding-left: 20px;
      background: rgb(255, 238, 215) url('../assets/hot.png') no-repeat 7% 50%;
      background-size: 13px;
      color: rgb(255, 96, 57);
    }
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>