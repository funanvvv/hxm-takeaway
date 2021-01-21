<template>
  <div class="home-page">
    <van-pull-refresh v-model="state.loading" @refresh="onRefresh">
      <top-status></top-status>
      <div class="main-wrap">
        <van-sticky :offset-top="30">
          <div id="home-search">
            <van-field
              v-model="state.value1"
              label="文本"
              left-icon="smile-o"
              right-icon="warning-o"
              placeholder="显示图标"
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
import topStatus from '@/components/home/topStatus.vue'
import searchTags from '@/components/home/searchTags.vue'
import appCarousel from '@/components/home/appCarousel.vue'
import shopList from '@/components/home/shopList.vue'
import { onMounted, reactive } from 'vue'
import { scrollHome } from '@/utils/scroll'
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
      window.addEventListener('scroll', scrollHome)
    })
    return { gotoSearch, onRefresh, state }
  },
}
</script>

<style lang="scss">
.home-page {
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
