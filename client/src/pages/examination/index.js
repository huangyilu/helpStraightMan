/**
* huangyilu 2019/07/08
* 直男考卷页
*/

import Taro, { Component } from '@tarojs/taro'
import { View, Image, Swiper, SwiperItem } from '@tarojs/components'
import './index.less'
import request from '@/utils/request'

export default class Examination extends Component {

  config = {
    navigationBarTitleText: '直男大考卷'
  }

  state = {
    list: []
  }

  componentWillMount() { }

  componentDidMount() {
    this.getList()
  }

  componentWillUnmount() { }

  componentDidShow() {
    // this.getList()
  }

  componentDidHide() { }

  getList() {
    request.callFun({
      name: 'exam_list'
    }).then(res => {
      this.setState({
        list: res.map(item => {
          return {
            ...item,
            choose: -1
          }
        })
      })
      console.log(' getlist = ', res)
    })
  }

  onClickOps(index, j, e) {
    let list = this.state.list
    list[index].choose = j
    this.setState({
      list
    })
  }

  render() {

    let question = this.state.list.map((item, index) => {
      return (
        <SwiperItem key={item._id} className='ev-ops__item'>
          <View className='ev-ops__title'>{index + 1}、 {item.question}</View>
          <View className='ev-ops__bg'>
            {
              item.options.map((op, j) => {
                return (
                  <View className='ev-ops' key={j+'ev'} onClick={this.onClickOps.bind(this, index, j)}>
                    {
                      op.img.map(image => {
                        return (
                          <View className='ev-ops__img-bg'>
                            <Image key={image.url} className='ev-ops__img' src={image.url} mode='widthFix' />
                          </View>
                        )
                      })
                    }
                    <View className={j === item.choose ? 'ev-ops__act' : ''}>
                      {op.text}
                    </View>
                  </View>
                )
              })
            }
          </View>
        </SwiperItem>
      )
    })

    return (
      <View className='examination-view'>
        <Swiper
          className='ev-ops__swiper'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          displayMultipleItems
        >
          {question}
        </Swiper>

        <View className='home-backstage__btn'>
          <AtFab onClick={this.onButtonClick.bind(this)} >录入</AtFab>
        </View>
      </View>
    )
  }
}
