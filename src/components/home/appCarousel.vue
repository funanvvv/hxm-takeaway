<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(item, index) in list" :key="index">
        <div class="inner-slide" v-for="(item2, index2) in item" :key="index2">
          <div class="item-round" @click="routeChange(index, index2)">
            <img width="25" height="25" :src="item2.src">
          </div>
          <div class="item-name">{{item2.name}}</div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import Swiper from 'swiper'
export default {
  setup() {
    const base = 'http://test.funanvvv.cn/bing/home-icon/'
    const list = ref([[{
      id: 1,
      src: base + '螃蟹.png',
      name: '海鲜'
    },{
      id: 2,
      src: base + '食物.png',
      name: '简餐'
    },{
      id: 3,
      src: base + '饮品.png',
      name: '甜品饮品'
    },{
      id: 4,
      src: base + '苹果.png',
      name: '水果'
    },{
      id: 5,
      src: base + '汉堡.png',
      name: '汉堡披萨'
    },{
      id: 6,
      src: base + '面食.png',
      name: '米粉面馆'
    },{
      id: 7,
      src: base + '沙拉.png',
      name: '轻食沙拉'
    },{
      id: 8,
      src: base + '寿司.png',
      name: '日韩料理'
    },{
      id: 9,
      src: base + '牛排.png',
      name: '能量西餐'
    },{
      id: 10,
      src: base + '全部.png',
      name: '全部分类'
    }],[{
      id:2.1
    },{
      id:2.2
    }]])
    const routeChange = (index, index2) => {
      console.log(index,'-' ,index2)
    }
    onMounted(() => {
      const mySwiper = new Swiper('.swiper-container', {
        loop: false,// 循环模式选项 
        pagination: {
          el: '.swiper-pagination',
        },
      })
    })
    return { list, routeChange }
  }
}
</script>

<style lang="scss">
.swiper-container {
  height: 140px;
  padding: 15px 0;
  .swiper-slide {
    display: grid;
    grid-template: 1fr 1fr / 1fr 1fr 1fr 1fr 1fr;
    padding: 5px 15px;
    box-sizing: border-box;
    .inner-slide {
      text-align: center;
      .item-round {
        width: 50px;
        height: 40px;
        border-radius: 25px;
        margin: 0 auto;
        box-sizing: border-box;
        // background-color: #f7f7f7;
      }
      .item-name {
        line-height: 5px;
        font-size: 12px;
        color: #333;
      }
    }
  }
  .swiper-pagination {
    .swiper-pagination-bullet-active {
      background: #444;
    }
  }
}
</style>