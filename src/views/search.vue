<template>
  <div class="search-page container">
    <div class="search-head">
      <van-icon name="down" @click="goBack" />
      <input>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped lang="scss">
@import '@/scss/global.scss';
.search-page {
  background: #fff;
  .search-head {
    @include flex();
    align-items: center;
  }
}
</style>
<style lang='scss'>
.search-page {
  .van-icon-down {
    transform: rotate(90deg);
    padding: 0 10px;
    font-size: 20px;
  }
}
</style>