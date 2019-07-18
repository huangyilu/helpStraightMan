/**
 * huangyilu 2019/07/08
 * 首页
 */

import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
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

  render () {
    return (
      <View className='index'>
        {/* <View onClick={this.onClick}>前往直男大考卷</View> */}
        {/* <Login></Login> */}
        <Examination></Examination>
      </View>
    )
  }
}
