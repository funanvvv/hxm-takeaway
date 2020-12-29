<template>
  <div class="home-shop-list-title">附近推荐</div>
  <div class="shop-list-wrap">
    <van-dropdown-menu>
      <van-dropdown-item v-model="state.value1" :options="option1" />
      <van-dropdown-item v-model="state.value2" :options="option2" />
    </van-dropdown-menu>
    <div class="list">
      <div class="list-item" v-for="(item, index) in list" :key="index" @click="gotoShop(item)">
        <van-image
          width="4rem"
          height="4rem"
          fit="cover"
          :src="item.avatarSrc"
        />
        <div class="item-content">
          <div class="title">{{item.title}}</div>
          <div class="score-sales-express">
            <span class="emphasize">{{item.score}}分</span>
            <span>月售{{item.sales}}</span>
          </div>
          <div class="score-sales-express">
            <span>起送￥{{item.minConsumption}}</span>
            <span>配送费￥{{item.expressFee}}</span>
          </div>
          <div class="describe">
            <div class="tag">
              "{{item.describe}}"
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
export default {
  setup() {
    const router = useRouter()
    const list = ref([{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/9e7c3d3b5c5945da69ca1129d76a2572.jpeg',
      title: '诸葛掌柜焖汁鸡(高沙店)',
      score: 4.8,
      sales: 4147,
      minConsumption: 20,
      expressFee: 2,
      describe: '招牌焖汁鸡米饭不错'
    },{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/下载.jfif',
      title: '养生鼎·鲍汁捞饭·燕窝鱼翅·养生世家(英捷店)',
      score: 4.9,
      sales: 663,
      minConsumption: 20,
      expressFee: 6,
      describe: '鲍汁山珍鸡丁捞饭是我喜欢的味道'
    },{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/9ce64d3c1cb9c2acdcbb54327d540663.jpeg',
      title: '一纸鸡锡纸烧肉饭(高沙店)',
      score: 4.9,
      sales: 2964,
      minConsumption: 0,
      expressFee: 0,
      describe: '口水鸡的食材很鲜,味道巨好吃'
    },{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/u=1745457937,3173313323&fm=26&gp=0.jpg',
      title: '半城外·牛杂小碗菜(高沙店)',
      score: 4.9,
      sales: 7011,
      minConsumption: 20,
      expressFee: 0,
      describe: '大刀牛肉面味道很正宗'
    },{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/u=1745457937,3173313323&fm=26&gp=0.jpg',
      title: '半城外·牛杂小碗菜(高沙店)',
      score: 4.9,
      sales: 7011,
      minConsumption: 20,
      expressFee: 0,
      describe: '大刀牛肉面味道很正宗'
    },{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/u=1745457937,3173313323&fm=26&gp=0.jpg',
      title: '半城外·牛杂小碗菜(高沙店)',
      score: 4.9,
      sales: 7011,
      minConsumption: 20,
      expressFee: 0,
      describe: '大刀牛肉面味道很正宗'
    },{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/u=1745457937,3173313323&fm=26&gp=0.jpg',
      title: '半城外·牛杂小碗菜(高沙店)',
      score: 4.9,
      sales: 7011,
      minConsumption: 20,
      expressFee: 0,
      describe: '大刀牛肉面味道很正宗'
    },{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/u=1745457937,3173313323&fm=26&gp=0.jpg',
      title: '半城外·牛杂小碗菜(高沙店)',
      score: 4.9,
      sales: 7011,
      minConsumption: 20,
      expressFee: 0,
      describe: '大刀牛肉面味道很正宗'
    },{
      avatarSrc: 'http://test.funanvvv.cn/bing/shop-avatar/u=1745457937,3173313323&fm=26&gp=0.jpg',
      title: '半城外·牛杂小碗菜(高沙店)',
      score: 4.9,
      sales: 7011,
      minConsumption: 20,
      expressFee: 0,
      describe: '大刀牛肉面味道很正宗'
    }])
    const gotoShop = (e) => {
      e = JSON.stringify(e)
      router.push({
        path: '/shop',
        query: {
          shop: e
        }
      })
    }
    const state = reactive({
      value1: 0,
      value2: 'a',
    });
    const option1 = [
      { text: '全部商品', value: 0 },
      { text: '新款商品', value: 1 },
      { text: '活动商品', value: 2 },
    ];
    const option2 = [
      { text: '默认排序', value: 'a' },
      { text: '好评排序', value: 'b' },
      { text: '销量排序', value: 'c' },
    ];
    return {
      state,
      option1,
      option2,
      list,
      gotoShop,
    };
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/global.scss';
.home-shop-list-title {
  top: 90px;
  z-index: 99;
  color: #333;
  position: sticky;
  font-size: 18px;
  font-weight: bold;
  padding: 10px 20px;
  background: #f7f7f7;
  transition: .3s;
}
.shop-list-wrap {
  .list {
    padding: 0 15px 10px 15px;
    .list-item {
      @include flex();
      background: #fff;
      border-radius: 10px;
      padding: 10px;
      &:not(:first-child) {
        margin-top: 10px;
      }
      .item-content {
        padding-left: 10px;
        max-width: calc(100% - 4rem - 20px);
        .title {
          font-weight: 1000;
          text-overflow:ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
        .score-sales-express {
          span {
            font-size: 12px;
            color: #666;
            &:first-child {
              margin-right: 10px;
            }
          }
          .emphasize {
            font-weight: bold;
            color: rgb(255, 96, 57);
          }
        }
        .describe {
          @include flex();
          .tag {
            margin-top: 5px;
            font-size: 12px;
            background:  rgb(255, 238, 215);
            color: rgb(255, 96, 57);
            padding: 1px 8px;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
.shop-list-wrap {
  .van-dropdown-menu__bar {
    background-image: linear-gradient(#fff, #f7f7f7);
    border-radius: 20px 20px 0 0;
    box-shadow: none;
    .van-ellipsis {
      font-size: 14px;
    }
    .van-dropdown-menu__item {
      flex: unset;
      min-width: 100px;
    }
  }
  .list-item {
    .van-image {
      border-radius: 6px;
      overflow: hidden;
    }
  }
}
</style>