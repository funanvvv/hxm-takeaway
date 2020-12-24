<template>
  <div class="home">
    <top-status></top-status>
    <div class="main-wrap">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        class="input-with-search"
        @focus="gotoSearch"
      >
        <template #append>
          <el-button icon="el-icon-search"></el-button>
        </template>
      </el-input>
      <search-tags></search-tags>
      <app-carousel></app-carousel>
      <shop-list></shop-list>
    </div>
    <div class="bottom-seat"></div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import 'swiper/css/swiper.css'
import topStatus from '@/components/home/topStatus.vue'
import searchTags from '@/components/home/searchTags.vue'
import appCarousel from '@/components/home/appCarousel.vue'
import shopList from '@/components/home/shopList.vue'
export default {
  components: {
    searchTags,
    appCarousel,
    shopList,
    topStatus,
  },
  setup() {
    const router = useRouter()
    const gotoSearch = () => {
      router.push({
        path: '/search'
      })
    }
    return { gotoSearch }
  },
}
</script>

<style scoped lang="scss">
.home {
  padding-top: 40px;
  .main-wrap {
    background: #f7f7f7;
    border-radius: 25px 25px 0 0;
    .input-with-search {
      transition: .3s;
      position: sticky;
      top: 40px;
      box-sizing: border-box;
      padding: 10px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      background: #f7f7f7;
      z-index: 99;
    }
  }
}
</style>
<style lang="scss">
.home {
  .input-with-search {
    transition: .3s;
    .el-input__inner {
      border-radius: 20px 0 0 20px;
    }
    .el-input-group__append {
      border-radius: 0 20px 20px 0;
    }
  }
}
</style>
