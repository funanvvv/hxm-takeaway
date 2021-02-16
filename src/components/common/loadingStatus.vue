<template>
  <div>
    <div class="tip" v-if="loading == 1">
      <van-loading />
    </div>
    <div class="tip fail" v-if="loading == -1">
      加载失败
    </div>
    <div class="tip end" v-if="loading == 3">
      已经到底了
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
export default {
  props: {
    data: Number
  },
  setup(props) {
    const loading = ref(props.data)
    watch(props, (val) => {
      loading.value = val.data
    })
    return {
      loading
    }
  }
}
</script>

<style lang="scss" scoped>
.tip {
  display: flex;
  justify-content: center;
  color: #999;
  &.end {
    font-size: 12px;
  }
}
</style>