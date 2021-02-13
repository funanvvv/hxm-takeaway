<template>
  <nav-bar color="#333"></nav-bar>
  <div class="home-page container">
    <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
      <top-status></top-status>
      <div class="main-wrap">
        <van-sticky :offset-top="30">
          <div id="home-search">
            <van-field
              v-model="state.value1"
              right-icon="search"
              :placeholder="defaultSearch"
              @focus="$router.push({path:'/search'})"
            />
          </div>
        </van-sticky>
        <search-tags></search-tags>
        <app-carousel></app-carousel>
        <shop-list></shop-list>
      </div>
      <div class="bottom-seat"></div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
import 'swiper/css/swiper.css'
import navBar from '@/components/navBar'
import topStatus from '@/components/home/topStatus.vue'
import searchTags from '@/components/home/searchTags.vue'
import appCarousel from '@/components/home/appCarousel.vue'
import shopList from '@/components/home/shopList.vue'
import { onMounted, reactive, ref } from 'vue'
import { dynamicNav } from '@/utils/scroll'
import { Toast } from 'vant';
export default {
  components: {
    navBar,
    searchTags,
    appCarousel,
    shopList,
    topStatus,
  },
  setup() {
    const router = useRouter()
    const defaultSearch = ref('搜索')
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
      window.addEventListener('scroll', dynamicNav)
    })
    return {
      defaultSearch,
      gotoSearch,
      onRefresh,
      state,
    }
  },
  activated() {
    document.getElementsByClassName('nav-bar')[0].style.backgroundColor = '#333'
  }
}
</script>

<style lang="scss">
.home-page {
  padding-top: 40px;
  .main-wrap {
    background: #f7f7f7;
    border-radius: 25px 25px 0 0;
    #home-search {
      transition: .3s;
      padding: 10px;
      border-radius: 20px 20px 0 0;
      background: #f7f7f7;
      .van-field {
        border-radius: 50px;
      }
    }
  }
}
</style>
