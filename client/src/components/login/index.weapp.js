import Taro, { Component } from "@tarojs/taro"
import { View, Text, Button } from "@tarojs/components"
import cloud from '../../utils/request'

export default class Login extends Component {
  state = {
    context: {}
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {
    this.getLogin()
  }

  componentDidHide() {}

  getLogin = () => {
    // Taro.cloud
    //   .callFunction({
    //     name: "login",
    //     data: {}
    //   })
    //   .then(res => {
    //     this.setState({
    //       context: res.result
    //     })
    //   })
    cloud.callFun({
      name: 'login'
    }).then(res => {
      this.setState({
        context: res
      })
      console.log('login = ', res)
    })
  }

  render() {
    return (
      <View className='index'>
        <Button onClick={this.getLogin}>获取登录云函数</Button>
        <Text>context：{JSON.stringify(this.state.context)}</Text>
      </View>
    )
  }
}
