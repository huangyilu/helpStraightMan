import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index/index'
import '../node_modules/taro-ui/dist/style/index.scss'
import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/clothes/index',
      'pages/index/index',
      'pages/backstage/index',
      'pages/examination/index',
      'pages/gift/index',
      'pages/appointment/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#8a8a8a',
      selectedColor: '#000000',
      list: [
        {
          pagePath: 'pages/clothes/index',
          text: '穿衣指南',
          iconPath: './images/clothes.png',
          selectedIconPath: './images/clothes_b.png'
        },
        {
          pagePath: 'pages/gift/index',
          text: '送礼指南',
          iconPath: './images/gift.png',
          selectedIconPath: './images/gift_b.png'
        },
        {
          pagePath: 'pages/appointment/index',
          text: '约会指南',
          iconPath: './images/appointment.png',
          selectedIconPath: './images/appointment_b.png'
        },
      ]
    },
    cloud: true
  }

  componentDidMount () {
    if (process.env.TARO_ENV === 'weapp') {
      Taro.cloud.init()
    }
  }

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
