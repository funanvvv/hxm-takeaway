<template>
  <nav-bar color="#fff" />
  <div class="location-page container">
    <div style="display: flex; align-items:center; padding-left: 10px">
      <van-icon name="cross" @click="goBack" />
      <div class="title">选择地址</div>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      add-button-text="+ 新增地址"
      @edit="onEdit"
      @select="onSelect"
      @add="showAdd = true"
    />
    <van-action-sheet v-model:show="showAdd" title="添加地址">
      <div class="content">
        <van-address-edit
          show-search-result
          :show-area="false"
          @save="onSaveAdd"
        />
      </div>
    </van-action-sheet>
    <van-action-sheet v-model:show="showEdit" title="修改地址">
      <div class="content">
        <van-address-edit
          show-search-result
          :show-area="false"
          :address-info="initValue"
          show-delete
          @save="onSaveEdit"
        />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import navBar from '@/components/common/navBar'
import { useRouter } from 'vue-router'
import { getLocation, changeLocation, changeCurrentLocation } from '@/utils/axios'
import { useStore } from 'vuex'
import { Toast } from 'vant'
export default {
  components: {
    navBar
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const chosenAddressId = ref(null)
    const list = ref(null)
    const init = () => {
      getLocation(store.state.phoneNumber).then(res => {
        if(res.code == 0) {
          chosenAddressId.value = res.data[0].currentAddress
          list.value = res.data[0].address ? JSON.parse(res.data[0].address) : []
        } else if(res.code == 5) {
          router.push({
            path: '/login'
          })
        }
      })
    }
    init()
    const goBack = () => {
      router.go(-1)
    }
    const change = reactive({
      onSelect: (item) => {
        changeCurrentLocation(
          store.state.phoneNumber,
          item.id
        ).then(res => {
          if(res.code == 0) {
            chosenAddressId.value = item.id
          } else {
            Toast.fail('设置失败！')
          }
        })
      },
      showAdd: false,
      showEdit: false,
      initValue: null,
      onEdit: (e) => {
        change.showEdit = !change.showEdit
        change.initValue = e
      },
      onSaveAdd: content => {
        const sub = list.value.slice(0)
        const id = sub.length ? +sub.slice(0).sort((a,b) => b.id - a.id)[0].id+1 : 1
        const val = {
          id: id,
          name: content.name,
          tel: content.tel,
          address: content.addressDetail
        }
        sub.push(val)
        changeLocation({
          phoneNumber: store.state.phoneNumber,
          locations: JSON.stringify(sub)
        }).then(res => {
          if(res.code == 0) {
            Toast.success('添加成功')
            list.value.push(val)
            change.showAdd = false
          } else {
            Toast.fail('添加失败')
          }
        })
      },
      onSaveEdit: content => {
        const sub = list.value.slice(0)
        const id = content.id
        let index = 0
        for(;index < list.value.length;index++) {
          if(list.value[index].id == id) break
        }
        const val = {
          id: id,
          name: content.name,
          tel: content.tel,
          address: content.addressDetail
        }
        sub[index] = val
        changeLocation({
          phoneNumber: store.state.phoneNumber,
          locations: JSON.stringify(sub)
        }).then(res => {
          if(res.code == 0) {
            Toast.success('添加成功')
            list.value[index] = val
            change.showEdit = false
          } else {
            Toast.fail('添加失败')
          }
        })
      }
    })
    return {
      goBack,
      chosenAddressId,
      list,
      ...toRefs(change)
    }
  },
}
</script>

<style lang='scss' scoped>
.location-page {
  padding-top: 40px;
  min-height: calc(100vh - 40px);
  background: white;
  .title {
    color: #666;
    padding: 10px 0;
    padding-left: 10px;
  }
  .content {
    padding: 10px;
  }
}
</style>
<style lang='scss'>
.location-page {
  .van-radio-group {
    .van-address-item, .van-cell__value {
      background: #fafafa
    }
  }
  .van-tag {
    background: #555;
  }
  .van-address-item .van-radio__icon--checked .van-icon {
    background: #555;
    border-color: #555;
  }
  .van-address-list__bottom {
    position: relative;
    padding: 10px 0;
  }
  .van-address-list__bottom {
    .van-button--danger {
      background: #fff;
      border-color: #fff;
      color: #666;
    }
  }
  .van-address-edit {
    .van-button--danger {
      background: #555;
      border-color: #555;
    }
  }
}
</style>