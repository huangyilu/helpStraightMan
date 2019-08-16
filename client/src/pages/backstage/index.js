/**
* huangyilu 2019/08/11
* 后台 -- 录入试题页
*/

import Taro, { Component } from '@tarojs/taro'
import { View, Picker } from '@tarojs/components'
import { AtInput, AtButton, AtIcon, AtImagePicker, AtInputNumber }  from 'taro-ui'
import './index.less'

import request from '@/utils/request'

class Index extends Component {

  config = {
    navigationBarTitleText: '录入'
  }

  state = {
    options: [{
      img: [],
      text: 'A',
      score: 0
    },{
      img: [],
      text: 'B',
      score: 0
    },{
      img: [],
      text: 'C',
      score: 0
    },{
      img: [],
      text: 'D',
      score: 0
    }],
    answer: 0,
    answerText: '',
    question: '',
    score: 0
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleQuestionChange (value, e) {
    let question = value
    this.setState({
      question
    })
    // TODO: test test
  }
  handleAnswerChange (value, e) {
    console.log(value)
    let index = +value.detail.value
    let answer = index
    let answerText = this.state.options[index].text
    this.setState({
      answer,
      answerText
    })
  }
  handleOpsChange (index, value, e) {
    let options = this.state.options
    options[index].text = value
    this.setState({
      options
    })
    console.log(this.state.options)
  }
  handleOpsUploadImg (index, value, e) {
    let options = this.state.options
    options[index].img = value
    this.setState({
      options
    })
    console.log(this.state.options)
  }
  handleOpsScore (index, value, e) {
    let options = this.state.options
    options[index].score = +value
    this.setState({
      options
    })
    console.log(this.state.options)
  }
  onClickAddOps () {
    let options = this.state.options
    options.push({
      img: [],
      text: '',
      score: 0
    })
    this.setState({
      options
    })
  }
  onDeleteOpsItem (index, e) {
    let options = this.state.options
    options.splice(index, 1)
    this.setState({
      options
    })
  }
  onSubmit () {
    let { answer, options, question } = this.state
    let data = {
      answer,
      options,
      question
    }
    if (options.length <= 0) return
    if (answer.length <= 0) return
    if (question.length <= 0) return

    request.callFun({
      name: 'add_exam',
      data
    }).then(res => {
      console.log(' add exam = ', res)
    })
  }

  render () {
    const answerContent = (
      <Picker mode='selector' range={this.state.options} rangeKey={'text'} onChange={this.handleAnswerChange.bind(this)}>
        <View className='answer_picker'>
          <View className='mb10'>本题答案为:</View>
          { this.state.answerText ? this.state.answerText : <span>请选择</span> }
        </View>
      </Picker>
    )
    return (
      <View className='index'>
        <AtInput
          name='value'
          title='描述'
          type='text'
          placeholder='请描述你的问题'
          value={this.state.value}
          onChange={this.handleQuestionChange.bind(this)}
        />
        {
          this.state.options.map((item, index) => {
            return (
              <View className='ops_items' key={item.img}>
                <AtInput
                  name='value'
                  title={`选项${index+1}`}
                  type='text'
                  placeholder='请写下你的选项'
                  value={item.text}
                  onChange={this.handleOpsChange.bind(this, index)}
                />
                <View className='m20 f32 pl15'>
                  选项分值（满分10分）：
                  <AtInputNumber
                    min={1}
                    max={10}
                    step={1}
                    value={item.score}
                    onChange={this.handleOpsScore.bind(this, index)}
                  />
                </View>
                <View className='flex items-center'>
                  <View className='flex-1'>
                    <AtImagePicker
                      showAddBtn={item.img.length < 1}
                      files={item.img}
                      onChange={this.handleOpsUploadImg.bind(this, index)}
                    />
                  </View>
                  <AtIcon value='trash' onClick={this.onDeleteOpsItem.bind(this, index)}></AtIcon>
                </View>
              </View>
            )
          })
        }
        {
          this.state.options.length < 4
            ? (
              <View className='mt20'>
                <AtButton circle type='secondary' onClick={this.onClickAddOps.bind(this)}>添加选项</AtButton>
              </View>
            )
            : null
        }
        {
          this.state.options.length > 0 ? answerContent : null
        }
        <View className='mt20'>
          <AtButton circle type='primary' onClick={this.onSubmit.bind(this)}>提交</AtButton>
        </View>
      </View>
    )
  }
}
export default Index
