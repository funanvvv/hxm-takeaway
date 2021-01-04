<template>
  <div class="search-page container">
    <div class="search-head">
      <van-icon name="down" @click="goBack" />
      <el-input
        autofocus="true"
        placeholder="请输入内容"
        v-model="input"
        class="input-with-search"
      >
        <template #append>
          <el-button icon="el-icon-search"></el-button>
        </template>
      </el-input>
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
  .input-with-search {
    padding-right: 15px;
    .el-input__inner {
      border-radius: 20px 0 0 20px;
    }
    .el-input-group__append {
      border-radius: 0 20px 20px 0;
    }
  }
}
</style>