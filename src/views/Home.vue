<template>
  <div class="home">
    <div class="top-wrap">
      浙江工商大学-花小猫外卖
    </div>
    <div class="main-wrap">
      <el-input
        placeholder="请输入内容"
        v-model="input"
        class="input-with-search"
      >
        <template #append>
          <el-button icon="el-icon-search"></el-button>
        </template>
      </el-input>
      <search-tags></search-tags>
      <app-carousel></app-carousel>
      <div class="title">附近推荐</div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import 'swiper/css/swiper.css'
import searchTags from '@/components/home/searchTags.vue'
import appCarousel from '@/components/home/appCarousel.vue'
export default {
  components: {
    searchTags,
    appCarousel
  },
  setup() {
    const carouselImgs = ref(['http://test.funanvvv.cn/bing/niu.jpg', 'http://test.funanvvv.cn/bing/yu.jpg'])
    return { carouselImgs }
  },
}

window.onscroll = function() {
  const dom = document.getElementsByClassName('el-input')[0]
  const val = dom.getBoundingClientRect().top - 40
  if(val <= 10) {
    dom.style.setProperty('border-top-left-radius', val * 3 + 'px')
    dom.style.setProperty('border-top-right-radius', val * 3 + 'px')
  }
  if(val == 0) {
    document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', 'white')
  } else {
    document.getElementsByClassName('nav-bar')[0].style.setProperty('background-color', '#333')
  }
}
</script>

<style scoped lang="scss">
.home {
  padding-top: 40px;
  .top-wrap {
    padding: 8px 10px;
    color: white;
  }
  .main-wrap {
    background: #fff;
    height: 1888px;
    border-radius: 25px 25px 0 0;
    .input-with-search {
      transition: .3s;
      position: sticky;
      top: 40px;
      box-sizing: border-box;
      padding: 10px;
      border-top-left-radius: 20px;
      border-top-right-radius: 20px;
      background: #fff;
      z-index: 99;
    }
    .title {
      padding-top: 10px;
      font-size: 18px;
      font-weight: bold;
      padding: 10px 20px 0;
    }
  }
}
</style>
<style lang="scss">
.home {
  .input-with-search {
    .el-input__inner {
      border-radius: 20px 0 0 20px;
    }
    .el-input-group__append {
      border-radius: 0 20px 20px 0;
    }
  }
}
</style>
