<template>
  <nav-bar color="#f7f7f7"></nav-bar>
  <div class="shop-page container">
    <div class="shop-main-wrap">
      <div class="options-bar">
        <van-icon name="down" @click="goBack" />
        <div id="shop-search">
          <van-field
            label="文本"
            left-icon="smile-o"
            right-icon="warning-o"
            placeholder="显示图标"
          />
        </div>
      </div>
      <div class="shop-main-bar">
        <div class="shop-basic-info">
          <div class="basic-left">
            <div class="title">{{shop.title}}</div>
            <div class="shop-score-sales">
              <span class="emphasize">{{shop.score}}</span>
              <span>月销{{shop.sales}}</span>
            </div>
          </div>
          <van-image
            width="60"
            height="60"
            fit="cover"
            src="https://img.yzcdn.cn/vant/cat.jpeg"
          />
        </div>
        <!-- <div class="shop-discount-notice">
          优惠<br>
          公告{{}}
        </div> -->
        <div class="tab">
          <van-sticky
            :offset-top="offsetTop"
            @scroll="sideScroll"
            v-show="active1==0"
          >
            <food-side></food-side>
          </van-sticky>
          <van-tabs
            v-model:active="active1"
            @change="switchTab"
            swipeable
          >
            <van-tab title="点餐">
              <food-list></food-list>
            </van-tab>
            <van-tab title="评价">
              <div class="empty-comment">
                暂无
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
      <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        v-show="active1==0"
      />
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs, provide } from 'vue'
import foodList from '@/components/shop/foodList.vue'
import foodSide from '@/components/shop/foodSide.vue'
import navBar from '@/components/common/navBar'
import { useRoute } from 'vue-router'
import { getClass, getFood } from '@/utils/axios'

export default {
  components: {
    foodList,
    foodSide,
    navBar
  },
  setup() {
    const route = useRoute()
    const shop = ref(JSON.parse(route.query.shop))
    const active = reactive({
      active1: 0,
    })
    const changeList = reactive({
      class: [],
      list: [],
      index: 0,
      onChange: (e) => {
        changeList.index = changeList.class[e].id
      }
    })
    const offsetTop = ref(140)
    const switchTab = (e) => {
      active.active1 = e
    }
    const sideScroll = (e) => {
      const el = document.getElementsByClassName('shop-food-side')[0]
      if(e.isFixed) {
        el.classList.remove('position')
      } else {
        el.classList.add('position')
      }
      if(e.scrollTop < 70) {
        offsetTop.value = 210 - e.scrollTop
      } else {
        offsetTop.value = 135
      }
    }
    const onSubmit = () => {
      return
    }

    onMounted(() => {
      window.scrollTo(0, 0)
      getClass(shop.value.id).then((res) => {
        changeList.class = res.data
        changeList.index = res.data[0].id
      })
      getFood(shop.value.id).then((res) => {
        changeList.list = res.data
      })
    })

    provide('list', changeList)

    return {
      shop,
      active,
      offsetTop,
      switchTab,
      ...toRefs(active),
      ...toRefs(changeList),
      sideScroll,
      onSubmit,
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import '@/scss/global.scss';
.shop-page {
  background: #f7f7f7;
  .shop-main-wrap {
    position: relative;
    top: 99px;
    .options-bar {
      display: flex;
      width: 100%;
      background: #f7f7f7;
      position: fixed;
      top: 40px;
      align-items: center;
      padding: 5px 0;
      z-index: 100;
      #shop-search {
        padding: 0 10px;
        .van-field {
          border-radius: 50px;
        }
      }
      .van-icon-down {
        transform: rotate(90deg);
        padding: 0 10px;
        font-size: 20px;
      }
    }
    .shop-main-bar {
      background: #fff;
      .tab {
        & > div:first-child {
          height: 100%!important;
        }
        .van-sticky:first-child {
          position: fixed;
          z-index: 99;
          width: 80px;
          height: 100%;
        }
        .empty-comment {
          color: #999;
          text-align: center;
          line-height: calc(100vh - 286px);
        }
      }
      .shop-basic-info {
        @include flex-row(space-between);
        padding: 6px 10px 0;
        .van-image__img {
          border-radius: 7px;
        }
        .basic-left {
          max-width: calc(100% - 60px);
          .title {
            text-overflow:ellipsis;
            white-space: nowrap;
            overflow: hidden;
            font-size: 20px;
            font-weight: bold;
          }
          .shop-score-sales {
            margin-top: 3px;
            color: #666;
            font-size: 12px;
            span {
              &:first-child {
                margin-right: 10px;
              }
            }
            .emphasize {
              font-weight: bold;
              color: rgb(255, 96, 57);
            }
          }
        }
      }
      .shop-discount-notice {
        padding: 0 10px 0;
      }
      .van-tabs {
        z-index: 0;
        .van-tab {
          flex: unset;
          min-width: 100px;
        }
        .van-tabs__wrap {
          position: sticky;
          top: 90px;
          z-index: 99;
          .van-tabs__line {
            background: #333;
          }
        }
        .van-tab__pane-wrapper--inactive {
          min-height: calc(100vh - 136px);
        }
      }
    }
  }
}
</style>