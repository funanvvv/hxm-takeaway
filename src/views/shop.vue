<template>
  <div class="shop-page container">
    <div class="main-wrap">
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
        {{shop.title}}
      </div>
    </div>
  </div>
</template>

<script>
import '@/utils/js/scroll.js'
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const shop = ref('')
    onMounted(() => {
      shop.value = JSON.parse(route.query.shop)
      console.log(shop.value)
    })
    return { shop }
  }
}
</script>

<style lang="scss">
.shop-page {
  background: #f7f7f7;
  .main-wrap {
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
      .van-icon-down {
        transform: rotate(90deg);
        padding: 0 10px;
        font-size: 20px;
      }
      .input-with-search {
        padding-right: 15px;
        .el-input__inner {
          border-radius: 20px;
        }
      }
    }
    .shop-main-bar {
      background: #fff;
      height: 1000px;
    }
  }
}
</style>