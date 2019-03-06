import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      myValue: '哈哈',
      myLove: 'banana',
      sex: '1',
      isTy: true,
      myLoves: ['apple']
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.ToggleTy = this.ToggleTy.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.getValue = this.getValue.bind(this);
    this.getValue2 = this.getValue2.bind(this);
  }
  handleChange (e) {
    // console.log(e.target);
    this.setState({
      myValue: e.target.value
    })
  }
  handleSelect (e) {
    this.setState({
      myLove: e.target.value
    })
  }
  handleRadio (e) {
    this.setState({
      sex: e.target.value
    })
  }
  ToggleTy () {
    this.setState({
      isTy: !this.state.isTy
    })
  }
  handleCheckbox (e) {
    // 勾上 苹果 myLoves ['apple']
    // 勾上 香蕉 myLoves ['apple', 'banana']
    let myLoves = this.state.myLoves;
    let index = myLoves.indexOf(e.target.value);
    // console.log(index);
    if (index > -1){
      // 存在, 删除
      myLoves.splice(index,1)
    } else {
      // 不存在, 添加
      myLoves.push(e.target.value);
    }
    this.setState({
      myLoves: myLoves
    })
  }
  getValue () {
    // var txt = document.getElementById('txt');
    // let value = this.refs.txt.value;
    console.log(this.myInput.value);
  }
  getValue2 () {
    console.log(this.myInput.value);
  }
  render () {
    return (
      <div>
        {/* 受控组件，写了 value 就必须要写 onChange */}
        {/* 普通输入框  */}
        <input type="text" value={this.state.myValue} onChange={this.handleChange} />
        <hr />
        {/* 下拉选择框 不能通过 selected 来控制默认选择项 */}
        <select value={this.state.myLove} onChange={this.handleSelect}>
          <option value="apple">苹果</option>
          <option value="banana">香蕉</option>
        </select>
        <hr />
        {/* 单选框 */}
        <input type="radio" name="sex" value="0" checked={this.state.sex === '0'} onChange={this.handleRadio} />男
        <input type="radio" name="sex" value="1" checked={this.state.sex === '1'} onChange={this.handleRadio} />女
        <hr />
        {/* 多选框 */}
        <input type="checkbox" value={this.state.isTy} onChange={this.ToggleTy} checked={this.state.isTy === true} /> 我同意
        <hr />
        <input type="checkbox" value="apple" onChange={this.handleCheckbox} checked={this.state.myLoves.indexOf('apple') > -1} /> 苹果
        <input type="checkbox" value="banana" onChange={this.handleCheckbox} checked={this.state.myLoves.indexOf('banana') > -1} /> 香蕉
        <hr />
        {/* 非受控组件 不能有 value 属性*/}
        {/* ref 指定字符串 */}
        {/* <input type="text" ref="txt" /> */}
        {/* ref 接收函数 el真实的DOM  defaultValue设置默认值*/}
        <input type='text' defaultValue="急急急" ref={(el) => this.myInput = el} />
        <button onClick={this.getValue}>获取非受控组件的值</button>
        <hr />
        <select defaultValue="李四" ref={(el) => this.myInput = el}>
          <option value="">请选择</option>
          <option value="张三">张三</option>
          <option value="李四">李四</option>
        </select>
        <button onClick={this.getValue2}>获取非受控组件的值 - select 的值</button>
      </div>
    )
  }
}

ReactDOM.render(<App/>,document.getElementById('root'))
