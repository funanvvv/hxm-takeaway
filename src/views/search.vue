<template>
  <div class="search-page">
    <div class="search-head">
      <van-icon name="down" @click="goBack" />
      <div id="search">
        <van-field
          v-model="value"
          right-icon="search"
          autofocus
          @update:model-value="search"
        />
      </div>
    </div>
    <div class="before-search">
      <div class="title">历史搜索</div>
      <search-tags :data="tags"></search-tags>
    </div>
    <div class="after-search">

    </div>
  </div>
</template>

<script>
import searchTags from '@/components/common/searchTags'
import { debounce } from '@/utils/throttle'
import { ref } from 'vue'
export default {
  components: {
    searchTags
  },
  setup() {
    const value = ref('')
    const tags = ref([{
      id: 1,
      content: "定节日鲜花"
    },{
      id: 2,
      content: "百亿补贴"
    },{
      id: 3,
      content: "汉堡"
    },{
      id: 4,
      content: "奶茶"
    },{
      id: 5,
      content: "黄焖鸡"
    },{
      id: 6,
      content: "蛋糕"
    },{
      id: 7,
      content: "烧烤"
    },{
      id: 8,
      content: "小龙虾"
    },{
      id: 9,
      content: "鸡架"
    }])
    let timer = null
    const search = () => {
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {return}, 1000)
    }
    return {
      value,
      tags,
      search,
      debounce
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/global.scss';
.search-page {
  background: #fff;
  .search-head {
    @include flex();
    align-items: center;
    padding-bottom: 15px;
    #search {
      width: 100%;
      padding-right: 15px;
      .van-cell {
        border-radius: 30px;
        background: #f7f7f7;
      }
    }
  }
  .before-search {
    .title {
      padding: 0 10px 15px;
      font-weight: bold;
    }
  }
}
</style>
<style lang='scss'>
.search-page {
  padding-top: 45px;
  min-height: calc(100vh - 45px);
  .van-icon-down {
    transform: rotate(90deg);
    padding: 0 10px;
    font-size: 20px;
  }
}
</style>