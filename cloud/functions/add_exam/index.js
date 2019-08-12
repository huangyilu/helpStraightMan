// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()
const db = cloud.database({
  env: 'atest-cdea75'
})

// 云函数入口函数
exports.main = async (event, context) => {
  // const wxContext = cloud.getWXContext()
  const { answer, options, question } = event
  return db.collection('examination').add({
    data: {
      answer,
      options,
      question
    }
  })
}
