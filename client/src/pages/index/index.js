/**
 * huangyilu 2019/07/08
 * 首页
 */

import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtFab } from 'taro-ui'
import './index.less'

// import Login from '../../components/login/index'
import Examination from '../../components/Examination/index'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () {
    // TODO: test
    Taro.setNavigationBarTitle({
      title: '直男大考卷'
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onClick () {
    console.log('sss')
    // Taro.navigateTo({
    //   url: {'/pages/'}
    // })
  }
  onButtonClick () {
    Taro.navigateTo({
      url: '/pages/backstage/index'
    })
  }

  render () {
    return (
      <View className='index'>
        {/* <View onClick={this.onClick}>前往直男大考卷</View> */}
        {/* <Login></Login> */}
        <Examination></Examination>

        <View className='home-backstage__btn'>
          <AtFab onClick={this.onButtonClick.bind(this)} >录入</AtFab>
        </View>
      </View>
    )
  }
}
