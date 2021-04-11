<template>
  <div class="top-wrap">
    <router-link to="/location" class="location">
      <van-icon name="location-o" />
        {{location}}
      <van-icon name="arrow-down" />
    </router-link>
    <!-- <div class="right">
      <van-icon name="comment-circle-o" />
    </div> -->
  </div>
</template>

<script>
import { onActivated,ref } from 'vue'
import { getLocation } from '@/utils/axios'
import { useStore } from 'vuex'
export default {
  setup() {
    const location = ref(null)
    const store = useStore()
    onActivated(() => { 
      getLocation(store.state.phoneNumber).then(res => {
        for(const i of JSON.parse(res.data[0].address)) {
          if(i.id == res.data[0].currentAddress) {
            location.value = i.address
            break
          }
        }
      })
    })
    return {
      location
    }
  }
}
</script>

<style scoped lang="scss">
.top-wrap {
  padding: 8px 10px;
  color: white;
  .location {
    color: #fff;
  }
  // .right {
  //   float: right;
  // }
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