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
    <div class="before-search" v-if="step == 1">
      <div class="title">历史搜索</div>
      <search-tags :data="tags" warn="无搜索记录" @tagClick="tagClick"></search-tags>
    </div>
    <loading-status :data="load"></loading-status>
    <div class="after-search" v-if="step == 2">
      <shop-card :data='searchList'></shop-card>
    </div>
  </div>
</template>

<script>
import searchTags from '@/components/common/searchTags'
import loadingStatus from '@/components/common/loadingStatus'
import shopCard from '@/components/common/shopCard'
import { searchShop } from '@/utils/axios'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
export default {
  components: {
    searchTags,
    loadingStatus,
    shopCard
  },
  setup() {
    const route = useRoute()
    const value = ref(route.query.tag || null)
    const load = ref(null)
    const tags = ref(JSON.parse(localStorage.getItem('searchHistory')) || [])
    const step = ref(1)
    const searchList = ref(null)
    let timer = null
    const search = tag => {
      load.value = 1
      step.value = 2
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(() => {
        const key = value.value
        if(key) {
          searchShop(key).then(res => {
            searchList.value = res.data
            if(!res.data.length) load.value = '找不到你想要的T_T'
            else load.value = null
          })
          if(tag) {
            tags.value = tags.value.filter(e => e.content != key)
            tags.value.unshift({content: key})
            if(tags.value.length > 20) tags.value.pop()
            localStorage.setItem('searchHistory', JSON.stringify(tags.value))
          }
        } else if(key == '') {
          step.value = 1
          load.value = null
        }
      }, 1000)
    }
    if(value.value) {
      search()
    }
    const tagClick = e => {
      value.value = e
      search()
    }
    return {
      value,
      load,
      tags,
      search,
      step,
      searchList,
      tagClick
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
  .van-button {
    background-color: #444;
    border-color: #444;
  }
}
</style>