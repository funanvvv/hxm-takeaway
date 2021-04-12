<template>
  <div class="shop-food-list">
    <div
      v-for="(item, index) in list.list"
      :key="index"
    >
      <div class="shop-food-item" v-if="item.cid==list.index">
        <van-image
          width="80px"
          height="80px"
          radius="4px"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="item-right">
          <div style="font-weight: 600; font-size: 14px">{{item.name}}</div>
          <div style="font-weight: 400; font-size: 10px; color:#999">{{item.describe}}</div>
          <div style="display:flex;justify-content:space-between">
            <div style="color:red">
              <span style="font-size:12px">￥</span>
              <span style="font-size:18px">{{item.price}}</span>
            </div>
            <van-stepper
              v-model="item.count"
              theme="round"
              button-size="20"
              disable-input
              min="0"
              :show-minus="Boolean(item.count)"
              :show-input="Boolean(item.count)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted } from 'vue'
export default {
  setup() {
    const list = inject('list')
    onMounted(() => {
      return
    })
    return {
      list,
    }
  }
}
</script>

<style lang="scss">
.shop-food-list {
  margin-left: 80px;
  overflow-y: auto;
  width: calc(100% - 80px);
  padding-bottom: 100px;
  .shop-food-item {
    height: 80px;
    padding: 5px;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    .item-right {
      flex-grow: 1;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: calc(100% - 80px);
      .van-stepper--round .van-stepper__plus {
        background-color: #555;
      }
      .van-stepper--round .van-stepper__minus {
        color: #555;
        border-color: #555;
      }
    }
  }
}
</style>