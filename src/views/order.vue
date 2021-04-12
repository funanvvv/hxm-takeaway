<template>
  <div class="order-page container">
    <div class="title">订单</div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div style="display: flex">
        <van-image
          width="30px"
          height="30px"
          radius="4px"
          fit="cover"
          :src="item.avatarSrc || 'https://img.yzcdn.cn/vant/cat.jpeg'"
        />
        <div style="font-weight:600; padding-left:10px; line-height:30px">{{item.name}}</div>
      </div>
      <div style="display: flex">
        <div class="slide">
          <div class="slide-item" v-for="(item2, index2) in JSON.parse(item.detail)" :key="index2">
            <van-image
              width="70px"
              height="50px"
              radius="4px"
              fit="cover"
              :src="item2.avatarSrc || 'https://img.yzcdn.cn/vant/cat.jpeg'"
            />
            <div class="food-name">{{item2.name}}</div>
          </div>
        </div>
        <div style="height:72px; display: flex;flex-direction: column;justify-content:center;flex-grow:1;align-items:center">
          <div style="height:20px">
            <span>￥</span>
            <span style="font-size: 18px">{{JSON.parse(item.detail).reduce((a, b) => a+b.price, 0).toFixed(2)}}</span>
          </div>
          <div style="font-size: 12px;color:#666">共{{JSON.parse(item.detail).length}}件</div>
        </div>
      </div>
      <van-button round size="small" color="#555">写评价</van-button>
    </div>
    <loading-status class="message" v-if="!list.length" :data="warn"></loading-status>
  </div>
</template>

<script>
import { ref } from 'vue'
import loadingStatus from '@/components/common/loadingStatus'
import { getOrder } from '@/utils/axios'
import { useStore } from 'vuex'
export default {
  components: {
    loadingStatus
  },
  setup() {
    const store = useStore()
    const warn = ref(null)
    const list = ref([])
    getOrder(store.state.id).then(res => {
      if(res.code == 0) {
        res.data.reverse()
        list.value = res.data
        if(!res.data.length) warn.value = "没有订单记录"
      } else if(res.code == 5) {
        warn.value = "请先登录"
      }
    })
    return {
      list,
      warn
    }
  },
}
</script>


<style lang="scss">
.order-page {
  padding: 45px 10px 0;
  background: #f7f7f7;
  .title {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 10px;
  }
  .item {
    overflow: hidden;
    padding: 10px;
    background: #fff;
    border-radius: 5px;
    margin: 10px 0;
    .slide {
      width: 80%;
      height: 72px;
      display: flex;
      margin-top: 10px;
      overflow: hidden;
      overflow-x: auto;
      box-shadow: inset 5px 0px 1px -5px rgba(0, 0, 0, 0.205), inset -5px 0px 5px -5px rgba(0, 0, 0, 0.137);
      .slide-item {
        &:not(:last-child) {
          padding-right: 5px;
        }
      }
      .food-name {
        font-size: 10px;
        width: 70px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        color: #777;
      }
    }
    .van-button {
      float: right;
      padding: 1px 15px;
    }
  }
  .message {
    padding-top: 40vh;
  }
}
</style>