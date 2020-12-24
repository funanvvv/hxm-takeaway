<template>
  <div class="top-wrap">
    <router-link to="/search" class="location">
      <van-icon name="location-o" />
      龙驰科创园B幢
      <van-icon name="arrow-down" />
    </router-link>
    <div class="right">
      <van-icon name="comment-circle-o" />
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
.top-wrap {
  padding: 8px 10px;
  color: white;
  .location {
    color: #fff;
  }
  .right {
    float: right;
  }
}
</style>
<style lang="scss">
.top-wrap {
  .van-icon-arrow-down {
    vertical-align: -15%;
  }
  .van-icon-location-o {
    vertical-align: -15%;
  }
  .van-icon-comment-circle-o {
    font-size: 25px;
  }
}
</style>