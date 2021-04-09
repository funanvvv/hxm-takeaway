<template>
  <div class="search-page">
    <div class="search-head">
      <van-icon name="down" @click="goBack" />
      <div id="search">
        <van-field
          v-model="value"
          autofocus
          @update:model-value="search(0)"
        >
          <template #button>
            <van-button
              round
              size="small"
              type="primary"
              @click="search(1)"
            >
              搜索
            </van-button>
          </template>
        </van-field>
      </div>
    </div>
    <div class="before-search">
      <div class="title">历史搜索</div>
      <search-tags :data="tags" warn="无搜索记录"></search-tags>
      <loading-status :data="load"></loading-status>
    </div>
    <div class="after-search">

    </div>
  </div>
</template>

<script>
import searchTags from '@/components/common/searchTags'
import loadingStatus from '@/components/common/loadingStatus'
import { ref } from 'vue'
export default {
  components: {
    searchTags,
    loadingStatus
  },
  setup() {
    const value = ref('')
    const load = ref(null)
    const tags = ref(JSON.parse(localStorage.getItem('searchHistory')) || [])
    let timer = null
    const search = tag => {
      load.value = 1
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        const key = value.value
        if(key.length) {
          console.log(key)
          if(tag) {
            tags.value = tags.value.filter(e => e != key)
            tags.value.unshift({content: key})
            if(tags.value.length > 20) tags.value.pop()
            localStorage.setItem('searchHistory', JSON.stringify(tags.value))
          }
        }
        load.value = null
      }, 1000)
    }
    return {
      value,
      load,
      tags,
      search,
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
        padding: 5px 8px;
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