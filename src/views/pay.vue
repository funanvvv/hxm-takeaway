<template>
  <nav-bar color="#fff"></nav-bar>
  <div class="pay-page container">
    <div style="display: flex; align-items:center; padding-left: 10px">
      <van-icon name="cross" @click="this.$router.go(-1)" />
      <div style="padding-left:15px">确认订单</div>
    </div>
    <div class="location">
      <div style="font-size:18px;font-weight:600">{{chosenLocation.address}}</div>
      <div>
        <span style="color:#888">{{chosenLocation.name}}</span>
        <span style="color:#888">{{chosenLocation.tel}}</span>
      </div>
    </div>
    <div class="food-outer">
      <div
        v-for="(item, index) in food"
        :key="index"
        class="item"
      >
        <van-image
          width="55px"
          height="55px"
          radius="4px"
          fit="cover"
          src="https://img.yzcdn.cn/vant/cat.jpeg"
        />
        <div class="item-right">
          <div style="display: flex; justify-content: space-between">
            <div style="font-weight: 600; font-size: 14px">{{item.name}}</div>
            <div style="color:#555;font-weight: 600">
              <span style="font-size:12px">￥</span>
              <span style="font-size:18px">{{item.price}}</span>
            </div>
          </div>
          <div style="display:flex;justify-content:space-between">
            <div style="color:#888">
              <span>x</span><span style="font-size: 18px">{{item.count}}</span>
            </div>
          </div>
        </div>
      </div>
      <div style="float:right;padding:0 15px 10px">
        <span>小计￥</span><span style="font-size: 22px;font-weight:600">{{food.reduce((a,b) => a+b.count*b.price, 0).toFixed(2)}}</span>
      </div>
    </div>
    <div class="submit">
      <div class="price">
        <span style="font-size:14px">￥</span>
        <span style="font-size:22px">{{food.reduce((a,b) => a+b.count*b.price, 0).toFixed(2)}}</span>
      </div>
      <van-button @click="onSubmit" size="small" color="linear-gradient(to bottom right, #666, #222)">
        去结算
      </van-button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import navBar from '@/components/common/navBar'
import { getLocation } from '@/utils/axios'
import { Toast } from 'vant'
import { addOrder } from '@/utils/axios'
export default {
  components: {
    navBar
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const router = useRouter()
    const location = ref(null)
    const current = ref(null)
    const chosenLocation = ref({
      address: ''
    })
    getLocation(store.state.id).then(res => {
      if(res.code == 0) {
        location.value = JSON.parse(res.data[0].address)
        current.value = res.data[0].currentAddress
        chosenLocation.value = location.value.filter(a => a.id == current.value)[0]
      } else {
        Toast.fail('请先登录')
        router.push({
          path: '/login'
        })
      }
    })
    const food = JSON.parse(route.query.food)
    const onSubmit = () => {
      const food = []
      for(const i of JSON.parse(route.query.food)) {
        food.push({
          id: i.id,
          name: i.name,
          avatarSrc: i.avatarSrc,
          price: i.price
        })
      }
      const orderDetail = {
        user: store.state.id,
        shop: JSON.parse(route.query.shop).id,
        food: JSON.stringify(food)
      }
      addOrder(orderDetail).then(res => {
        if(res.code == 0) {
          Toast.success('下单成功！')
          router.push({
            path: '/order',
          })
        } else {
          Toast.fail('迷之错误T_T')
        }
      })
    }
    return {
      food,
      location,
      chosenLocation,
      onSubmit
    }
  },
}
</script>

<style lang="scss">
.pay-page {
  padding-top: 55px;
  background: #fff;
  .location {
    padding: 10px;
    background: #f7f8fa;
    border-radius: 5px;
    margin: 5px 10px;
  }
  .food-outer {
    background: #f7f8fa;
    margin: 5px 10px;
    border-radius: 5px;
    overflow: hidden;
    .item {
      padding: 10px;
      margin: 0 5px;
      display: flex;
      .item-right {
        flex-grow: 1;
        padding-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: calc(100% - 80px);
      }
    }
  }
  .submit {
    border-top: .5px solid #eee;
    width: 100%;
    height: 45px;
    position: fixed;
    bottom: 0;
    padding: 5px 12px;
    background: #fff;
    display: flex;
    justify-content: flex-end;
    box-sizing: border-box;
    .price {
      line-height: 34px;
      padding-left: 10px;
      padding: 0 10px;
    }
    .van-button--small {
      padding: 0 20px;
    }
  }
}
</style>
