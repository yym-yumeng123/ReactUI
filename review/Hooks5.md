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


### useMemo
1. 要理解`useMemo`, 需要先理解 `React.memo`
```js
function App() {
const [n, setN] = React.useState(0);
const [m, setM] = React.useState(0);
const onClick = () => {
  setN(n + 1);
};

return (
  <div className="App">
    <div>
      <button onClick={onClick}>update n {n}</button>
    </div>
    // Child 就是普通的组件. 每次更新 n, 都会执行 Child, 但我们不希望一直渲染
    <Child data={m}/>
    // Child2 被 React.memo 包裹, 每次更新 n, 可以避免渲染, 减少渲染次数
    <Child2 data={m}/>
  </div>
);

function Child(props) {
  console.log("child 执行了");
  console.log('假设这里有大量代码')
  return <div>child: {props.data}</div>;
}

const Child2 = React.memo(Child);
```
2. 但是上面的 `React.memo` 有个 bug, 当我们的 props 是个 监听函数时, 会不生效,  因为 新旧函数地址不一样

3. 所以我们来学习 `useMemo`
  - 第一个参数 `useMemo(() => value)`
  - 第二个参数依赖 `useMemo(() => value, [m, n])`
  - 只有当依赖变化时, 才会计算新的 value, 依赖不变, 还用之前的value

```js
// 对上面的代码进行优化
function App() {
  const [n, setN] = React.useState(0);
  const [m, setM] = React.useState(0);
  const onClick = () => {
    setN(n + 1);
  };
  const onClick2 = () => {
    setM(m + 1);
  };
  // useMemo
  const onClickChild = useMemo(() => {
    const fn = div => {
      console.log("on click child, m: " + m);
      console.log(div);
    };
    return fn;
  }, [m]); // 这里呃 [m] 改成 [n] 就会打印出旧的 m
  return (
    <div className="App">
      <div>
        <button onClick={onClick}>update n {n}</button>
        <button onClick={onClick2}>update m {m}</button>
      </div>
      <Child2 data={m} onClick={onClickChild} />
    </div>
  );
}

function Child(props) {
  console.log("child 执行了");
  console.log("假设这里有大量代码");
  return <div onClick={e => props.onClick(e.target)}>child: {props.data}</div>;
}

const Child2 = React.memo(Child);
```
4. `React.memo` 和 `useMemo` 搭配使用


### useCallback 是 useMemo 的语法糖
1. 用法
```js
useCallback(x => log(x), [m])

==> 等价于

useMemo(() => x => log(x), [m])
```

### useRef
1. 如果你需要一个值, 在组件不断 render 时保持不变
2. 初始化: `const count = useRef(0)`
3. 读取: `count.current`
4. 为什么current? 保证两次 `useRef` 是同一个值(只有引用能做到)
5. `useRef` 值变化 但不会引起页面render
```js
// 如何才能 render 呢
// 监听 ref . 当 ref.current 变化时, 调用 state 里面的 setState
const count = useRef(0)
const [_, setX] = useState(null)

const click = () => {
  count.current += 1
  // 调用即可
  setX(Math.random())
}
```
6. 也可以引用 dom 对象, 也可以引用普通对象
```js
const ref = useRef(null)

<button ref={ref}></button>
```
---

### 对比
- `useState/useReducer` 每次都渲染
- `useMemo/useCallback` 依赖变化时才变
- `useRef` 永远不变


### forwardRef
如果你的函数组件接受别人传过来的 `ref`, 必须把自己用 `forwardRef` 包起来

```js
function App() {
  const buttonRef = useRef(null);
  return (
    <div className="App">
      <Button2 ref={buttonRef}>按钮</Button2>
    </div>
  );
}
// 由于props 里面不包含 ref, 需要 forwardRef 
const Button2 = React.forwardRef((props, ref) => {
  return <button className="red" ref={ref} {...props} />;
});
```

### useImperativeHandle
- 对 ref 进行 设置, 也就是 `setRef` 的意思, 用于自定义 ref
```js
function App() {
  const buttonRef = useRef(null);
  useEffect(() => {
    console.log(buttonRef.current);
  });
  return (
    <div className="App">
      <Button2 ref={buttonRef}>按钮</Button2>
      <button
        className="close"
        onClick={() => {
          console.log(buttonRef);
          buttonRef.current.x();
        }}
      >
        x
      </button>
    </div>
  );
}

const Button2 = React.forwardRef((props, ref) => {
  const realButton = createRef(null);
  const setRef = useImperativeHandle;
  setRef(ref, () => {
    return {
      x: () => {
        realButton.current.remove();
      },
      realButton: realButton
    };
  });
  return <button ref={realButton} {...props} />;
});
```

### 自定义 Hook
```js
// 自定义 hook
import { useState, useEffect } from "react";

const useList = () => {
  const [list, setList] = useState(null);
  useEffect(() => {
    ajax("/list").then(list => {
      setList(list);
    });
  }, []); // [] 确保只在第一次运行
  // 暴露 增加 删除 api
  return {
    list: list,
    addItem: name => {
      setList([...list, { id: Math.random(), name: name }]);
    },
    deleteIndex: index => {
      setList(list.slice(0, index).concat(list.slice(index + 1)));
    }
  };
};
export default useList;

function ajax() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { id: "1", name: "Frank" },
        { id: "2", name: "Jack" },
        { id: "3", name: "Alice" },
        { id: "4", name: "Bob" }
      ]);
    }, 2000);
  });
}

```
```js
// 使用 上面的 hook
import useList from "./hooks/useList";

function App() {
  const { list, deleteIndex } = useList();
  return (
    <div className="App">
      <h1>List</h1>
      {list ? (
        <ol>
          {list.map((item, index) => (
            <li key={item.id}>
              {item.name}
              <button
                onClick={() => {
                  deleteIndex(index);
                }}
              >
                x
              </button>
            </li>
          ))}
        </ol>
      ) : (
        "加载中..."
      )}
    </div>
  );
}
```

### Stale Closure 过时闭包
- 用来描述函数引用的变量 是之前产生的变量 -> 通过依赖避免
