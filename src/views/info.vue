<template>
  <div class="info-page container">
    <div class="basic-info">
      <el-avatar :size="60" :src="url"></el-avatar>
      <div class="basic-info-right">
        <div>
          这个是用户昵称
          <div class="basic-info-icon">
            <van-icon name="setting-o" />
            <van-icon name="comment-circle-o" />
          </div>
        </div>
        <div>填满了肚子，人就不会空虚</div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    const url = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')

    return { url }
  }
}
</script>

<style lang="scss">
.info-page {
  padding: 0 10px;
  background: #f7f7f7;
  .basic-info {
    display: flex;
    position: relative;
    top: 10px;
    &-right {
      flex: 1;
      padding-left: 20px;
      line-height: 30px;
      & > div {
        &:first-child {
          font-size: 18px;
          font-weight: 800;
          .basic-info-icon {
            float: right;
            font-size: 25px;
            line-height: 36px;
            .van-icon {
              font-weight: bold;
              &:first-child {
                padding-right: 10px;
              }
            }
          }
        }
        &:nth-child(2) {
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>