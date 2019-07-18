import Taro from "@tarojs/taro"

// 云函数调用
const callFun = param => {
  let { name, data = {} } = param
  let result = Taro.cloud
  .callFunction({
    name,
    data
  })
  .then(res => {
      console.log('res.js = ', res)
      return res.result.data
  })
  return result
}

export default {
  callFun
}
