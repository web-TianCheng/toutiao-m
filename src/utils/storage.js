// 封装本地存储函数
// 存储
export const setItem = (key, value) => {
  if (typeof value === 'object') {
    return window.localStorage.setItem(key, JSON.stringify(value))
  }
  window.localStorage.setItem(key, value)
}
// 获取
export const getItem = name => {
  const data = window.localStorage.getItem(name)
  try {
    // 如果不是json形式的字符串会报错
    return JSON.parse(data)
  } catch (err) {
    return data
  }
}
// 删除
export const romoveItem = (key) => {
  window.localStorage.romoveItem(key)
}
