import axios from 'axios'

const request = axios.create({
  baseURL: 'http://toutiao.itheima.net'
})

export default request

// 为什么这样报错
// export const request = axios.create({
//     baseURL: 'http://toutiao.itheima.net'
// });
