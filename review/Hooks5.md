# Hooks 全解
- `useState` 状态
- `useEffect` 副作用 -> `useLayoutEffect`
- `useContext` 上下文
- `useReducer` Redux
- `useMemo` 记忆
- `useCallback` 回调
- `useRef` 引用
- 自定义 hook


### useState 
1. 使用状态
```js
const [count, setCount] = useState(0)
const [user, setUser] = useState({name: 'ym'})
```
```js
// 1. 不可局部更新
function App() {
  const [user,setUser] = useState({name:'yym', age: 18})
  const onClick = ()=>{
    // 点击后, 只会显示 name, 不会显示 age
    setUser({
      name: 'Jack'
    })
  }
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

// ==>
// 自己合并属性
function App() {
  const [user,setUser] = useState({name:'yym', age: 18})
  const onClick = ()=>{
    setUser({
      ...user,
      name: 'Jack'
    })
  }
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

// 2. 地址会变
setState(obj) 如果 obj 地址不变, React 就认为数据没有变化
```
2. useState 接受函数
```js
// 该函数赶回初始 state, 且只执行一次
const [state, setState] = useState(() => {
  return initialValue
})
```
3. setState 接受函数
```js
function App() {
  const [n, setN] = useState(0)
  const onClick = ()=>{
    // setN(n+1)
    // setN(n+1) // 你会发现 n 不能加 2
    setN(i=>i+1)
    setN(i=>i+1)
  }
  return (
    <div className="App">
      <h1>n: {n}</h1>
       
      <button onClick={onClick}>+2</button>
    </div>
  );
}
```

### useReducer
使用 `useReducer` 分4步走
- 创建初始值 `initialState`
- 创建所有操作 `reducer(state, action)`
- 使用 `useReducer(reducer, initialState)` 得到读写操作
- 调用`写 ({type: 'action'})`
- 总结: `useReducer 是复杂点的 useState`

```js
import React from 'react';
// 1. 创建初始值
const initial = {
  n: 1,
};
/**
 * 2. 创建操作 reducer
 * state: 旧的数据
 * action: 动作
 */
const reducer = (state, action) => {
  if (action.type === 'add') {
    return { n: state.n + action.number };
  } else if (action.type === 'multi') {
    return { n: state.n * action.number };
  } else {
    throw new Error('unknown type');
  }
};

export default function App() {
  /**
   * 3. 是有 useReducer
   * reducer 所有操作
   * initial 初始值
   * return [state, dispatch] 读/写操作
   */
  const [state, dispatch] = React.useReducer(reducer, initial);
  // 4. 写入 action
  const onClickAdd = () => {
    dispatch({
      type: 'add',
      number: 1
    });
  };
  const onClickMulti = () => {
    dispatch({
      type: 'multi',
      number: 2
    });
  };
  return (
    <div>
      <h1>n: {state.n}</h1>
      <button onClick={onClickAdd}>add</button>
      <button onClick={onClickMulti}>multi</button>
    </div>
  );
}

```
