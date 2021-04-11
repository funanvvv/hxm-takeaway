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
        <search-tags :data="tags" @tagClick="tagClick"></search-tags>
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
import navBar from '@/components/common/navBar'
import topStatus from '@/components/home/topStatus.vue'
import searchTags from '@/components/common/searchTags.vue'
import appCarousel from '@/components/home/appCarousel.vue'
import shopList from '@/components/home/shopList.vue'
import { onActivated, onDeactivated, reactive, ref } from 'vue'
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
    const tags = ref([{
      hot: true,
      id: 1,
      content: "牛杂"
    },{
      id: 2,
      content: "黄焖鸡"
    },{
      id: 3,
      content: "口水鸡"
    },{
      id: 4,
      content: "鸡丁"
    },{
      id: 5,
      content: "纸包鸡"
    }])
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
    const tagClick = (e) => {
      router.push({
        path: '/search',
        query: {
          tag: e
        }
      })
    }

    onActivated(() => {
      window.addEventListener('scroll', dynamicNav)
      document.getElementsByClassName('nav-bar')[0].style.backgroundColor = '#333'
    })
    onDeactivated(() => {
      window.removeEventListener('scroll', dynamicNav)
    })

    return {
      defaultSearch,
      tags,
      gotoSearch,
      onRefresh,
      state,
      tagClick,
    }
  },
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
