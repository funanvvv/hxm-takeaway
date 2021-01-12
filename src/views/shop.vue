<template>
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
          <!-- <el-avatar 
            shape="square" 
            :size="60" 
            :src="shop.avatarSrc">
          </el-avatar> -->
        </div>
        <!-- <div class="shop-discount-notice">
          优惠<br>
          公告{{}}
        </div> -->
        <van-sticky :offset-top="90">
          <van-tabs v-model:active="active1">
            <van-tab title="点餐"></van-tab>
            <van-tab title="评价"></van-tab>
          </van-tabs>
        </van-sticky>
        <food-side></food-side>
        <food-list></food-list>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs, provide } from 'vue'
import foodList from '@/components/shop/foodList.vue'
import foodSide from '@/components/shop/foodSide.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    foodList,
    foodSide,
  },
  setup() {
    const route = useRoute()
    const shop = ref(JSON.parse(route.query.shop))
    const active = reactive({
      active1: 1,
      active2: 1,
      active3: 1,
    })
    const list = ref([[{
      name: 'zzzzzzzzz'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    },{
      name: 'zxzxxxxxx'
    }],[{
      name: 'iiiiiiiii'
    },{
      name: 'iiiiiiiii'
    }]])
    const changeList = reactive({
      theList: list.value[0],
      pickList: () => {
        changeList.theList = list.value[1]
        console.log(changeList.theList)
      }
    })
    onMounted(() => {
      window.scrollTo(0, 0)
    })
    provide('list', changeList)
    return {
      shop,
      active,
      ...toRefs(active),
      list,
      ...toRefs(changeList),
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
    top: 49px;
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
      .shop-basic-info {
        @include flex-row(space-between);
        padding: 10px 10px 0;
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
        position: sticky;
        top: 90px;
        .van-tab {
          flex: unset;
          min-width: 100px;
        }
        .van-tabs__line {
          background: #333;
        }
      }
    }
  }
}
</style>