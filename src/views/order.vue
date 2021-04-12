<template>
  <div class="order-page container">
    <div class="title">订单</div>
    <div v-for="(item, index) in list" :key="index">
      <div>{{item.name}}</div>
      <div v-for="(item2, index2) in JSON.parse(item.detail)" :key="index2">
        item2.name
      </div>
    </div>
    <loading-status v-if="!list.length" data="空空如也"></loading-status>
  </div>
</template>

<script>
import { ref } from 'vue'
import loadingStatus from '@/components/common/loadingStatus'
import { getOrder } from '@/utils/axios'
import { useStore } from 'vuex'
export default {
  components: {
    loadingStatus
  },
  setup() {
    const store = useStore()
    const list = ref([])
    getOrder(store.state.phoneNumber).then(res => {
      list.value = res.data
      console.log(list.value)
    })
    return {
      list
    }
  },
}
</script>


<style lang="scss">
.order-page {
  padding: 45px 10px 0;
  background: #f7f7f7;
  .title {
    font-size: 18px;
    font-weight: bold;
  }
}
</style>