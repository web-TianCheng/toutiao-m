// 用户的请求
import request from '@/utils/request'
// 用户认证接口
export const login = data => request({
  method: 'POST',
  url: '/v1_0/authorizations',
  data

})
// 验证码验证

export const sendSms = code => request({
  method: 'GET',
  url: `/v1_0/sms/codes/${code}`
})
