<template>
  <div class="search-page container">
    <div class="search-head">
      <van-icon name="down" @click="goBack" />
      <div id="search">
        <van-field
          v-model="value"
          right-icon="search"
          autofocus
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const value = ref('')

    return {
      value
    }
  },
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
    #search {
      width: 100%;
      padding-right: 15px;
      .van-cell {
        border-radius: 30px;
        background: #f7f7f7;
      }
    }
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