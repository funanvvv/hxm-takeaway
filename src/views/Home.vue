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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {

  },
});
</script>

<style scoped lang="scss">
.home {
  .top-wrap {
    padding: 8px 10px;
    color: white;
  }
  .main-wrap {
    background: #fff;
    height: 1888px;
    border-radius: 15px 15px 0 0;
    .input-with-search {
      position: sticky;
      top: 0;
      box-sizing: border-box;
      padding: 10px;
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
