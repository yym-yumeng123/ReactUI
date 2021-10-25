# useState 用法

### useState 使用
```js
export default function App() {
  console.log('App 运行了...')
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
```
1. 首次渲染 `render App`, 调用 `App()` -> 得到虚拟dom -> 创建真是 dom
2. 用户点击 button -> 调用 `setCount(count + 1)` -> 再次 `render App` -> 每次都会打印 -> 得到虚拟dom -> 和旧的虚拟dom作对比 `DOM diff` -> 更新

---

几个问题? 
- 执行`setCount`会发生什么? `count` 会变吗? `App()` 会重新执行吗?
- 如果 `App()` 重新执行, 那么 `useState(0)` 的时候, count 每次的值会有不同吗? // 会不同

分析

- `setCount` -> 数据存入 X
  - `setCount`一定会修改数据 x, 将`count + 1` 存入 x
  - `setCount`一定会触发`<App />` 重新渲染
- `useState` -> 读取 X 并赋值
  - `useState` 肯定会从 `x` 读取 `count` 最新值
- X ?
  - 每个组件有自己的数据 X, 我们将其命名为 `state`

### 尝试实现 useState
1. 初次
```js
/**
 * @params 初始值
 */
function myUseState(initialValue) {
  // 每次都为 初始值, 页面不会改变 
  let state = initialValue
  const setState = newValue => {
    // 让 state 修改为新的值
    state = newValue
    // 再次渲染
    render()
  }
  // 返回一个 [p1, p2]
  return [state, setState]
}


const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}

function App() {
  console.log('App 运行了...');
  const [count, setCount] = myUseState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
```

2. 把 state 提取为 全局变量
```js
/**
 * @params 初始值
 */
// set 一个 全局的 _state
let _state;
function myUseState(initialValue) {
  _state = _state === undefined ? initialValue : _state
  const setState = (newValue) => {
    _state = newValue;
    render();
  };
  return [_state, setState];
}

const render = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

function App() {
  console.log('App 运行了...');
  const [count, setCount] = myUseState(0);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}
```
