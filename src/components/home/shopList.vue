<template>
  <van-sticky :offset-top="80">
    <div class="home-shop-list-title">附近推荐</div>
  </van-sticky>
  <div class="shop-list-wrap">
    <van-dropdown-menu>
      <van-dropdown-item v-model="state.value1" :options="option1" />
      <van-dropdown-item v-model="state.value2" :options="option2" />
    </van-dropdown-menu>
    <div class="list">
      <card :data="list"></card>
    </div>
    <loading-status :data='state.loading'></loading-status>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onActivated, onDeactivated } from 'vue'
import { getShop } from '@/utils/axios'
import { touchBottom } from '@/utils/scroll'
import Card from '@/components/common/shopCard.vue'
import LoadingStatus from '@/components/common/loadingStatus'
export default {
  components: {
    Card,
    LoadingStatus,
  },
  setup() {
    const state = reactive({
      loading: -2, // 1显示加载，2不显示，3显示到底，-1显示加载失败
      value1: 0,
      value2: 'a',
    });
    const list = ref([])
    const getData = (endNum) => {
      if(state.loading == 3) {
        return
      } else if (state.loading != 1) {
        state.loading = 1
        getShop(endNum).then((res) => {
          if(res.code == '0') {
            list.value = list.value.concat(res.data)
            state.loading = 2
            if(res.data.length == 0) {
              state.loading = 3
            }
          } else {
            state.loading = -1
          }
        })
      }
    }
    const option1 = [{ 
      text: '全部商品', value: 0
    },{ 
      text: '新款商品', value: 1
    },{
      text: '活动商品', value: 2 
    },]
    const option2 = [{
      text: '默认排序', value: 'a'
    },{
      text: '好评排序', value: 'b'
    },{
      text: '销量排序', value: 'c'
    },]

    onMounted(() => {
      getData(0)
    })

    // 触底加载事件
    const test2 = () => {
      getData(list.value.length)
    }
    // 触底防抖
    let timer = null
    const emitTouchBottom = () => {
      if(timer) {
        clearTimeout(timer)
      }
      timer = setTimeout(function() {
        touchBottom(test2)
        timer = null
      },50)
    }

    onActivated(() => {
      window.addEventListener('scroll', emitTouchBottom)
    })

    onDeactivated(() => {
      window.removeEventListener('scroll', emitTouchBottom)
    })

    return {
      state,
      option1,
      option2,
      list,
    };
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/global.scss';
.home-shop-list-title {
  top: 90px;
  z-index: 99;
  color: #333;
  position: sticky;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  padding-top: 0;
  background: #f7f7f7;
  transition: .3s;
}
.shop-list-wrap {
  min-height: calc(100vh - 350px);
}
</style>
<style lang="scss">
.shop-list-wrap {
  .van-dropdown-menu__bar {
    background-image: linear-gradient(#fff, #f7f7f7);
    border-radius: 20px 20px 0 0;
    box-shadow: none;
    .van-ellipsis {
      font-size: 14px;
    }
    .van-dropdown-menu__item {
      flex: unset;
      min-width: 100px;
    }
  }
  .list-item {
    .van-image {
      border-radius: 6px;
      overflow: hidden;
    }
  }
}
</style>