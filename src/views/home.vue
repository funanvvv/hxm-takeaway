<template>
  <div class="home-page">
    <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
      <top-status></top-status>
      <div class="main-wrap">
        <van-sticky :offset-top="40">
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
        </van-sticky>
        <search-tags></search-tags>
        <app-carousel></app-carousel>
        <shop-list data='1'></shop-list>
      </div>
      <div class="bottom-seat"></div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import 'swiper/css/swiper.css'
import topStatus from '@/components/home/topStatus.vue'
import searchTags from '@/components/home/searchTags.vue'
import appCarousel from '@/components/home/appCarousel.vue'
import shopList from '@/components/home/shopList.vue'
import { onMounted, reactive } from 'vue'
import { Toast } from 'vant';
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
    const state = reactive({
      count: 0,
      loading: false,
    });
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功');
        state.loading = false;
        state.count++;
      }, 1000);
    };
    onMounted(() => {
      return
    })
    return { gotoSearch, onRefresh, state }
  },
}
</script>

<style scoped lang="scss">
.home-page {
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
.home-page {
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
