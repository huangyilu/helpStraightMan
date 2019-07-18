const cloud = require('wx-server-sdk')

cloud.init({
  env: 'atest-cdea75'
})

exports.main = async () => {
  const wxContext = cloud.getWXContext()

  return {
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
