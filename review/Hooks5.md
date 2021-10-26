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
 * state: 旧的状态
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
### 如何使用 useReducer 代替 Redux

> 使用 `useReducer` 和 `useContext` 配合代替 Redux

**步骤**
1. 将数据集中在一个 `store` 对象
2. 将所有操作集中在`reducer` 
3. 创建一个 `Context`
4. 创建对数据读写的 API, `useReducer`
5. 将第四步内容 放到第三步 `Context` 中
6. 用`Context.Provider` 将`Context`提供给所有组件
7. 各个子组件就可以使用 `useContext` 获取`读写API`

```js
import React, { useEffect, createContext, useReducer, useContext } from 'react';

// 1. store 对象
const store = {
  user: null,
  books: null,
  movies: null,
};

// 2. 创建一个 reducer 操作集合
const reducer = (state, action) => {
  switch (action.type) {
    case 'setUser':
      return { ...state, user: action.user };
    case 'setBooke':
      return { ...state, books: action.books };
    case 'setMovies':
      return { ...state, movies: action.movies };
    default:
      throw new Error();
  }
};

// 3. 创建一个 Context
const Context = createContext(null);

export default function App() {
  // 4. useReducer
  const [state, dispatch] = useReducer(reducer, store);
  return (
    // 56. 使用Context上下文, 创建作用域, 并传参 state, dispatch
    <Context.Provider value={{ state, dispatch }}>
      <User />
    </Context.Provider>
  );
}

function User() {
  // 7. 使用 useContext
  const { state, dispatch } = useContext(Context);
  // 使用 dispatch, 2s 后 设置值
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'setUser',
        user: { name: 'yym' },
      });
    }, 2000);
  }, []);
  return (
    <div>
      <h1>个人信息</h1>
      <div>name: {state.user ? state.user.name : ''}</div>
    </div>
  );
}

```

### useContext
1. 上下文
  - 全局变量是全局的上下文
  - 上下文是局部的全局变量
2. 使用方法
   - 使用`C = createContext(initial)` 创建上下文
   - `<C.provider>` 圈定作用域
   - 在作用域内使用 `useContext(C)` 来使用上下文
3. 不是响应式的, 是逐级而下通知的
```js
// 示例
// 1. createContext
const Context = React.createContext(null);
export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    // set 上下文
    <Context.Provider value={{ count, setCount }}>
      <Parent />
    </Context.Provider>
  );
}

const Parent = () => {
  return (
    <div>
      我是爸爸
      <Child />
    </div>
  );
};

const Child = () => {
  // 3. 使用 useContext
  const { count, setCount } = React.useContext(Context);
  return (
    <div onClick={() => setCount((i) => i + 1)}>我是儿子, count: {count}</div>
  );
};
```

### useEffect 副作用
1. 什么是副作用?
  - 对环境的改变就是副作用; 例: `document.title='11'` 
2. 按顺序执行
3. 主要作用可以代替 `class` 组件的三种钩子

```js
export default function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState(18);

  const onClick = () => {
    setCount((i) => i + 1);
  };

  const onClickAge = () => {
    setAge((i) => i + 1);
  };

  // componentDidMount
  useEffect(() => {
    console.log('我只在第一次渲染, 点击不渲染');
  }, []);

  // componentDidUpdate
  useEffect(() => {
    console.log('count 变化我就渲染, 第一次也渲染, age变化我不渲染');
  }, [count]);

  useEffect(() => {
    console.log('每次我都渲染, 无论那个变化');
  });

  // 做的改变, 可以在 return 离开时清楚 componentWillUnmount
  useEffect(() => {
    const id = setInterval(() => {
      console.log('我 return')
    }, 10000)
    return () => {
      window.clearInterval(id)
    }
  }, [])

  return (
    <div>
      <p>我是count: {count}</p>
      <p>我是age: {age}</p>
      <button onClick={onClick}>count</button>
      <button onClick={onClickAge}>age</button>
    </div>
  );
}

```
### useLayoutEffect 布局副作用 和 useEffect 差不多
1. `useEffect` 在浏览器渲染`完成后`执行
2. `useLayoutEffect` 在浏览器渲染`完成前`执行
3. `useLayoutEffect` 总是比 `useEffect` 先执行
4. 使用 `useLayoutEffect` 里的任务最好影响了Layout
5. 最好优先使用 `useEffect`
