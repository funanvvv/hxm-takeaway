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
  setup() {
    const tags = ref([{
      hot: true,
      id: 1,
      content: "定节日鲜花"
    },{
      hot: true,
      id: 2,
      content: "百亿补贴"
    },{
      hot: false,
      id: 3,
      content: "汉堡"
    },{
      hot: false,
      id: 4,
      content: "奶茶"
    },{
      hot: false,
      id: 5,
      content: "黄焖鸡"
    },{
      hot: false,
      id: 6,
      content: "蛋糕"
    }])
    return { tags }
  }
}
</script>

<style scoped lang="scss">
.tags-wrap {
  padding: 0 10px;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  .tag {
    padding: 3px 10px;
    font-size: 12px;
    border-radius: 11px;
    margin-bottom: 5px;
    &.tag-normal {
      background-color: #eee;
      color: #333;
    }
    &.tag-hot {
      background-color: rgb(255, 238, 215);
      color: rgb(255, 96, 57);
    }
    &:not(:last-child) {
      margin-right: 5px;
    }
  }
}
</style>