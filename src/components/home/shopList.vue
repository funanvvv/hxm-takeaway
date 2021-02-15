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
      <div class="list-item" v-for="(item, index) in list" :key="index" @click="gotoShop(item)">
        <van-image
          width="4rem"
          height="4rem"
          fit="cover"
          :src="item.avatarSrc"
        />
        <div class="item-content">
          <div class="title">{{item.name}}</div>
          <div class="score-sales-express">
            <span class="emphasize">{{item.score}}分</span>
            <span>月售{{item.sales}}</span>
          </div>
          <div class="score-sales-express">
            <span>起送￥{{item.minConsumption}}</span>
            <span>配送费￥{{item.expressFee}}</span>
          </div>
          <div class="describe">
            <div class="tag">
              "{{item.describe}}"
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom-tip" v-if="state.loading == 1">
      <van-loading />
    </div>
    <div class="bottom-tip fail" v-if="state.loading == -1">
      加载失败
    </div>
    <div class="bottom-tip end" v-if="state.loading == 3">
      已经到底了
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, onActivated, onDeactivated } from 'vue'
import { useRouter } from 'vue-router'
import { getShop } from '@/utils/axios'
import { touchBottom } from '@/utils/scroll'
export default {
  setup() {
    const router = useRouter()
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
          console.log(res)
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
    const gotoShop = (e) => {
      e = JSON.stringify(e)
      router.push({
        path: '/shop',
        query: {
          shop: e
        }
      })
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
      gotoShop,
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
  background: #f7f7f7;
  transition: .3s;
}
.shop-list-wrap {
  min-height: 300px;
  .list {
    padding: 0 15px 10px 15px;
    .list-item {
      @include flex();
      background: #fff;
      border-radius: 10px;
      padding: 10px;
      &:not(:first-child) {
        margin-top: 10px;
      }
      .item-content {
        padding-left: 10px;
        max-width: calc(100% - 4rem - 20px);
        .title {
          font-weight: 1000;
          text-overflow:ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .score-sales-express {
          span {
            font-size: 12px;
            color: #666;
            &:first-child {
              margin-right: 10px;
            }
          }
          .emphasize {
            font-weight: bold;
            color: rgb(255, 96, 57);
          }
        }
        .describe {
          @include flex();
          .tag {
            margin-top: 5px;
            font-size: 12px;
            background:  rgb(255, 238, 215);
            color: rgb(255, 96, 57);
            padding: 1px 8px;
            border-radius: 5px;
          }
        }
      }
    }
  }
  .bottom-tip {
    display: flex;
    justify-content: center;
    color: #999;
  }
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