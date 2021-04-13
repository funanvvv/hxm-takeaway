<template>
  <nav-bar color="#fff"></nav-bar>
  <div class="edit-page">
    <div style="display: flex; align-items:center; padding-left: 10px">
      <van-icon name="cross" @click="this.$router.go(-1)" />
      <div style="color: #333;padding: 10px 0;padding-left: 10px;">个人资料</div>
    </div>
    <div style="height:50px;line-height:50px;color: #777;padding-left:20px;background: #fafafa">基础信息</div>
  </div>
</template>

<script>
import navBar from '@/components/common/navBar'
export default {
  components: {
    navBar,
  },
  setup() {
    return {

    }
  },
}
</script>


<style lang="scss">
.edit-page {
  padding-top: 40px;
  min-height: calc(100vh - 40px);
  background: white;
}
</style>