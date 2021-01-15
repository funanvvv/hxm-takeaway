<template>
  <div class="login-page">
    <van-icon name="cross" @click="this.$router.go(-1)" />
    <div class="body">
      <p class="title">花小猫</p>
      <div class="tip1">使用本机号码一键登录</div>
      <input
        v-if="step=='phone'"
        type="text"
        placeholder="输入手机号"
        v-model="phoneNumber"
      >
      <van-password-input
        v-if="step=='verify'"
        :value="verifyCode"
        :length="6"
        :mask="false"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <van-number-keyboard
        v-model="verifyCode"
        :show="showKeyboard"
        @blur="showKeyboard = false"
      />
      <div style="padding: 0 10px">
        <van-button :disabled="cooling!=1" type="primary" block @click="doVerify">{{buttonText}}</van-button>
        <van-button disabled class="button2" type="primary" block>使用其他方式登录</van-button>
      </div>
      <div class="tip2">
        未注册手机号登陆后将自动生成账号，且代表你已阅读并同意
        <a>《用户服务协议》</a>、
        <a>《隐私政策》</a>和
        <a>《运营商协议》</a>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watch } from 'vue'
import { getVerifyCode, checkVerifyCode } from '@/utils/axios'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const step = ref('phone')
    // const step = ref('verify')
    const showKeyboard = ref(false)
    const verifyCode = ref()
    const cooling = ref(1)
    const buttonText = ref('获取验证码')
    const verify = reactive({
      phoneNumber: '',
      doVerify: () => {
        if((/^[1](([3][0-9])|([4][0,1,4-9])|([5][0-3,5-9])|([6][2,5,6,7])|([7][0-8])|([8][0-9])|([9][0-3,5-9]))[0-9]{8}$/.test(verify.phoneNumber))){ 
          Toast.loading({
            duration: 0,
            forbidClick: true,
            message: '稍候'
          })
          getVerifyCode(verify.phoneNumber).then((res) => {
            if(res.code == '0') {
              Toast.success(res.msg)
              showKeyboard.value = true
              cooling.value = 62
              step.value = 'verify'
              const timer = window.setInterval(() => {
                if(cooling.value > 1 && cooling.value <= 62) {
                  cooling.value--
                  buttonText.value = '获取验证码(' + cooling.value + '秒)'
                } else {
                  clearInterval(timer)
                  buttonText.value = '获取验证码'
                }
              }, 1000)
            } else if(res.code == '1') {
              Toast.fail(res.msg)
            } else {
              Toast.fail('未知错误')
            }
          }).catch(() => {
            Toast.fail('未知错误')
          })
        } else {
          Toast.fail('请填写正确的手机号')
        }
      }
    })

    watch(verifyCode, (val) => {
      if(val.length == 6) {
        Toast.loading({
          duration: 0,
          forbidClick: true,
          message: '稍候'
        })
        checkVerifyCode({
          phoneNumber: verify.phoneNumber,
          verifyCode: verifyCode.value
        }).then((res) => {
          console.log(res)
          if(res.code == '0') {
            Toast.success(res.msg)
            const d = new Date();
            d.setTime(d.getTime()+(7*24*60*60*1000));
            const expires = 'expires='+d.toGMTString();
            document.cookie = 'phoneNumber='+ verify.phoneNumber + ';' + expires
            document.cookie = 'token=' + res.data.token + ';' + expires
            store.commit('SET_USER_PHONE', verify.phoneNumber)
            store.commit('SET_USER_TOKEN', res.data.token)
            router.go(-1)
          } else if(res.code == '2') {
            Toast.fail(res.msg)
            step.value = 'phone'
          } else {
            Toast.fail(res.msg)
          }
        }).catch(() => {
          Toast.fail('未知错误')
        })
      }
    })
      
    return {
      step,
      cooling,
      buttonText,
      showKeyboard,
      verifyCode,
      ...toRefs(verify)
    }
  }
}
</script>

<style lang="scss">
.login-page {
  padding: 15px 20px;
  height: calc(100% + 25px);
  background: #fafafa;
  overflow-y: auto;
  .van-icon {
    font-size: 22px;
    left: 10px;
  }
  .body {
    text-align: center;
    .title {
      font-size: 24px;
    }
    .tip1 {
      font-size: 10px;
      color: #666;
    }
    input {
      width: 180px;
      margin: 22px 0 26px 0;
      background-color: #fafafa;
      border: none;
      border-bottom: 1px solid #000;
      font-size: 22px;
      letter-spacing: 4px;
      &::placeholder {
        text-align: center;
        color: #aaa;
        font-size: 16px ;
      }
    }
    .van-password-input__security li {
      background-color: #fafafa;
      border-bottom: 1px solid;
      margin: 0 5px;
    }
    [class*='van-hairline']::after {
      content: unset;
    }
    .van-password-input {
      margin-bottom: 26px;
      margin-top: 11px;
    }
    .van-button {
      margin-top: 10px;
      font-size: 12px;
      border-radius: 20px;
      height: 35px;
    }
    .button2 {
      background: #fafafa;
      border: 1px solid #999;
      color: #000;
    }
    .tip2 {
      margin-top: 10px;
      line-height: 20px;
      text-align: left;
      font-size: 10px;
      color: #999;
      a {
        color: #1989fa;
      }
    }
  }
}
</style>