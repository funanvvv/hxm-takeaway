<template>
  <div class="shop-page container">
    <div class="shop-main-wrap">
      <div class="options-bar">
        <van-icon name="down" @click="goBack" />
        <el-input
          placeholder="请输入内容"
          v-model="input"
          class="input-with-search"
          @focus="gotoSearch"
        >
        </el-input>
      </div>
      <div class="shop-main-bar">
        <div class="shop-basic-info">
          <div class="basic-left">
            <div class="title">{{shop.title}}</div>
            <div class="describe">{{shop.describe}}</div>
          </div>
          <el-avatar shape="square" :size="60" :src="shop.avatarSrc"></el-avatar>
        </div>
        <div class="shop-discount-notice">
          优惠
        </div>
        <van-tabs v-model:active="active1">
          <van-tab title="标签 1">
            <van-sidebar v-model="active2">
              <van-sidebar-item title="标签名称" />
            </van-sidebar>
          </van-tab>
          <van-tab title="标签 2">
            <van-sidebar v-model="active3">
              <van-sidebar-item title="标签名称" />
            </van-sidebar>
            <food-list></food-list>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, reactive, toRefs } from 'vue'
import foodList from '@/components/shop/foodList.vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    foodList,
  },
  setup() {
    const route = useRoute()
    const shop = ref(JSON.parse(route.query.shop))
    const active = reactive({
      active1: 1,
      active2: 1,
      active3: 1,
    });
    onMounted(() => {
      window.scrollTo(0, 0)
    })
    return { shop, active, ...toRefs(active) }
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
      .van-icon-down {
        transform: rotate(90deg);
        padding: 0 10px;
        font-size: 20px;
      }
      .input-with-search {
        padding-right: 15px;
        z-index: 100;
        .el-input__inner {
          border-radius: 20px;
        }
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
          .describe {
            margin-top: 3px;
            color: #333;
          }
        }
        .el-avatar {
          min-width: 60px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
        }
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
        .van-sidebar-item--select::before {
          background: transparent;
        }
        .van-tab__pane {
          display: flex;
        }
        .van-sticky--fixed {
          left: 80px;
        }
      }
    }
  }
}
</style>