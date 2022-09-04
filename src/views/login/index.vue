<template>
    <div>
        <van-nav-bar
            title="登录"
        />
        <van-form  class="login_from" @submit="onSubmit" ref="login_from">
            <van-field
                v-model="user.mobile"
                name="mobile"
                placeholder="请输入手机号"
                 :rules="rules.mobile"
            >
                <template #left-icon>
                    <i class="toutiao icon-toutiaoshouji"></i>
                </template>
            </van-field>
            <van-field
                v-model="user.code"
                name="code"
                placeholder="请输入验证码"
                :rules="rules.code"

            >
                <template #left-icon>
                    <i class="toutiao icon-toutiaoyanzhengma"></i>
                </template>
                 <template #button>
                    <van-count-down :time="15 * 1000" format="ss s"  v-if="isShowCount" @finish="isShowCount=false"/>
                    <van-button size="mini" type="primary" native-type="button" @click='onSendSms' v-else>发送验证码</van-button>

                </template>
            </van-field>
            <div style="margin: 16px;">
                <van-button round block type="info" native-type="submit">提交</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import { sendSms, login } from '@/api/user'
import { mapMutations } from 'vuex'
export default {
  name: 'LoginView',

  data () {
    return {
      user: {
        mobile: '',
        code: ''
      },
      rules: {
        mobile: [
          {
            required: true,
            message: '请输入手机号'
          },
          {
            pattern: /^1(3\d|4[5-9]|5[0-35-9]|6[567]|7[0-8]|8\d|9[0-35-9])\d{8}$/,
            message: '手机号码格式不正确'
          }
        ],
        code: [
          {
            required: true,
            message: '请输入验证码'
          },
          {
            pattern: /^\d{6}$/,
            message: '验证码格式不正确'
          }
        ]
      },
      isShowCount: false
    }
  },

  methods: {
    ...mapMutations(['setUser']),
    async onSubmit (values) {
      this.$toast.loading({
        message: '登陆中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(this.user)

        // this.getUser(val) 不是这样设置的
        // this.$store.commit('getUser',val)
        this.$store.commit('setUser', res.data.data)
        this.$toast.success('登录成功')
      } catch (err) {
        console.log('登录失败', err)
        this.$toast.fail('登录失败，手机号或验证码错误')
      }
    },
    async onSendSms () {
      /*
                1.按钮消失，出现倒计时
                2.表单验证验证码
                3.发送请求
            */
      this.isShowCount = true
      // 传入在是字符串在name值
      try {
        await this.$refs.login_from.validate('mobile')
        //  console.log('验证成功',res)
      } catch (err) {
        return console.log('验证失败', err)
      }

      try {
        await sendSms(this.user.mobile)
        this.$toast.success('发送验证码成功')
      } catch (err) {
        // 发送失败，关闭倒计时
        this.isCountDownShow = false
        if (err.response.status === 429) {
          this.$toast('发送太频繁了，请稍后重试')
        } else {
          this.$toast('发送失败，请稍后重试')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
    /deep/.van-nav-bar{
        background: #3296fa;
        .van-nav-bar__title{
            font-size: 32px;
            color: #fff;
        }
    }
    /deep/.login_from .van-field__left-icon{
        padding-right: 20px;
    }

</style>
