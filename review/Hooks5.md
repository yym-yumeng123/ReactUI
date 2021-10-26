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
