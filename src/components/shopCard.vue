<template>
  <div class="list-item">
    <van-image
      width="4rem"
      height="4rem"
      fit="cover"
      :src="shop.avatarSrc"
    />
    <div class="item-content">
      <div class="title">{{shop.name}}</div>
      <div class="score-sales-express">
        <span class="emphasize">{{shop.score}}分</span>
        <span>月售{{shop.sales}}</span>
      </div>
      <div class="score-sales-express">
        <span>起送￥{{shop.minConsumption}}</span>
        <span>配送费￥{{shop.expressFee}}</span>
      </div>
      <div class="describe">
        <div class="tag">
          "{{shop.describe}}"
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  props: {
    data: Object
  },
  setup(props){
    const shop = ref(props.data)

    return {
      shop
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/global.scss';
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
</style>