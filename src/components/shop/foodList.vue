<template>
  <div class="shop-food-list">
    <div
      v-for="(item, index) in list.list"
      :key="index"
    >
      <div class="shop-food-item" v-if="item.cid==list.index">
        <van-image
          width="5rem"
          height="5rem"
          radius="4px"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="item-right">
          <div style="font-weight: 600; font-size: 14px">{{item.name}}</div>
          <div style="display:flex;justify-content:space-between">
            <div style="color:red">
              <span style="font-size:12px">￥</span>
              <span style="font-size:18px">4</span>
            </div>
            <van-icon name="add" />
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
      .van-icon {
        font-size: 20px;
        color: #555;
      }
    }
  }
}
</style>