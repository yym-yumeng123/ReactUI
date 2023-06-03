## Debug
```bash
console.log('打印需要看到的值...')
```

## class 组件
```js
import React from "react"
import ReactDOM from "react-dom"
import PropTypes from "prop-types"

class App extends React.Component {
  // 默认参数
  static defaultProps = {
    message: "hello world",
    firstName: "Yang",
    lastName: "yu",
  }
  // 传参检查
  static propTypes = {
    message: PropTypes.string,
  }

  static displayName = "App"

  // 数据状态
  state = {
    count: 1,
  }

  /**
   * 1. onClick = {this.increment.bind(this)}
   * 2. 箭头函数
   * 3. 可以在 constructor 中使用 bind 绑定this
   */
  increment = () => {
    this.setState({ count: 2 })
  }

  // 计算属性
  get name() {
    return this.props.firstName + this.props.lastName
  }

  // 声明周期
  componentDidMount() {}

  render() {
    return (
      <div>
        <div>{this.props.message}</div>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>点击</button>
        <div>{this.name}</div>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

```

```js
函数组件

import React, { useState } from "react"
import { useEffect } from "react"
import ReactDOM from "react-dom"

interface Props {
  message?: string;
}

const App: FC<Props> = (props) => {
  /**
   * 如何使用 state, React version > 16.8
   * useState 返回一个数组, 解构
   */

  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  // 生命周期 代替 componentDidMount componentDidUpdate
  useEffect(() => {
    console.log("componentDidMount() 或者 componentDidUpdate()")
  })

  // 第二个参数 []
  useEffect(() => {
    console.log("只在第一次执行")
  }, [])

  // 当某个参数更新, 才触发
  useEffect(() => {
    console.log("count更新了之后执行")
  }, [count])

  useEffect(() => {
    return () => {
      console.log("我死了")
    }
  })

  return (
    <div>
      <div>{props.message}</div>
      <div>{count}</div>
      <button onClick={increment}>点击</button>
    </div>
  )
}

App.defaultProps = {
  message: "Hello World",
}

App.displayName = "yym"


```
