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
          @save="onSave"
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
          @save="onSave"
        />
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
import navBar from '@/components/common/navBar'
import { useRouter } from 'vue-router'
export default {
  components: {
    navBar
  },
  setup() {
    const router = useRouter()
    const chosenAddressId = ref('8');
    const list = [
      {
        id: '8',
        name: '富楠',
        tel: '17376566423',
        address: '浙江省杭州市浙江工商大学信息与电子工程学院',
      },
      {
        id: '11',
        name: '富楠',
        tel: '17376566423',
        address: '浙江省杭州市萧山区',
      },
    ];
    const goBack = () => {
      router.go(-1)
    }
    const change = reactive({
      onSelect: (item, index) => {
        chosenAddressId.value = index
      },
      showAdd: false,
      showEdit: false,
      initValue: null,
      onEdit: (e) => {
        change.showEdit = !change.showEdit
        change.initValue = e
      },
      onSave: content => {
        console.log(content)
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