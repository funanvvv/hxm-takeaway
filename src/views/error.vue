<template>
  <div class="error-page container">
    <loading-status data="未知网络错误T_T"></loading-status>
    <van-button color="#555" @click="this.$router.go(-1)">重试</van-button>
  </div>
</template>

<script>
import loadingStatus from '@/components/common/loadingStatus.vue'
export default {
  components: {
    loadingStatus
  },
  setup() {
    return {

    }
  },
}
</script>


<style lang='scss'>
.error-page {
  background: #f7f7f7;
  padding: 55px 0 0;
  .van-button {
    display: block;
    margin: 0 auto;
    top: 30px;
  }
}
</style>