/**
* huangyilu 2019/07/08
* 直男考卷页
*/

import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.less'

import cloud from '../../utils/request'


export default class Examination extends Component {
  state = {
    list: [
      {
        qs_id: 0,
        question: '下面哪一个最贵？',
        options: [{
            imgUrl: 'cloud://atest-cdea75.83ba-atest-cdea75-1255705280/images/WechatIMG273.jpeg',
            text: 'A'
          }],
        answer: 0
      }
    ]
  }

  componentWillMount () { }

  componentDidMount () {
    // this.getList()
  }

  componentWillUnmount () { }

  componentDidShow () {
    this.getList()
  }

  componentDidHide () { }

  getList () {
    cloud.callFun({
      name: 'exam_list'
    }).then(res => {
      this.setState({
        list: res
      })
      console.log(' getlist = ', res)
    })
  }

  render () {

    let question = this.state.list.map((item, index) => {
      return (
        <View key={item.qs_id}>
          <View>QS{index+1} : {item.question}</View>
          {
            item.options.map((op, j) => {
              return (
                <View key={j}>
                  <Image src={op.imgUrl} mode='widthFix' />
                  <View>
                    {op.text}
                  </View>
                </View>
              )
            })
          }
          <View>

          </View>
        </View>
      )
    })

    return (
      <View className='examination-view'>
        {question}
      </View>
    )
  }
}
