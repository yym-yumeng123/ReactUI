# 布局组件

- 通过添加对应的组件, 在页面中进行 上下, 左右的简单页面布局, 创建 `布局容器 Layout`, `头部布局 Header`, `侧边栏 SideBar`,`Content 内容部分`, `Footer 底部布局`

- Layout：布局容器，其下可嵌套 Header SiderBar Content Footer 或 Layout 本身，可以放在任何父容器中。
- Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- SiderBar：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。
- Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中

### Layout.tsx

```ts
// 继承 HTML 属性
interface LayoutProps extends React.HTMLAttributes<HTMLElement> {}
```

使用 flex 布局, 每个内容组件都包裹在容器内

- 上中下 布局
- 上 中(左右布局) 下 布局
- 上 中(右左布局) 下 布局
- 侧边 右边(上中下) 布局

只有最后一个和其他布局稍微不一样,

### 判断 Layout 第一层子元素是否有 SideBar

```js
// ts 断言, children 当做数组来用
const child = children as ReactElement[];

// 得到子元素是否有 SideBar, 有添加类名
// 使用 reduce 多项结果合并出一个结果
const hasAside =
  child.length &&
  child.reduce((result, node) => result || node.type === Sidebar, false);
```

### 写一个合并 class 的优化过程
```js
// 初始
function addPrefixAndMergeClass(prefix: string) {
  return (name: string | ClassToggles) => {
    let name2;
    let result;
    if (typeof name === "string" || name === undefined) {
      name2 = name;
      result = [prefix, name].filter(Boolean).join("-");
    } else {
      name2 = Object.entries(name)
        .filter(kv => kv[1])
        .map(item => item[0]);
      result = name2
        .map(item => [prefix, item].filter(Boolean).join("-"))
        .join(" ");
    }

    return result;
  };
}

// 第 2 步
function addPrefixAndMergeClass(prefix: string) {
  return (name: string | ClassToggles) => {
    let name2;
    let result;
    if (typeof name === "string" || name === undefined) {
      // 把 字符串 改为数组, 和 对面变为数组一样
      name2 = [name];
    } else {
      name2 = Object.entries(name)
        .filter(kv => kv[1])
        .map(item => item[0]);
    }
    // 都一样, 提取到外面
    result = name2
    .map(name => [prefix, name].filter(Boolean).join("-"))
    .join(" ");

    return result;
  };
}

// 3. 把2 中的 name2 = [name] => 可以被 Object.entries 的 name2 = {[name]: name}
function addPrefixAndMergeClass(prefix: string) {
  return (name: string | ClassToggles) => {
    let name2;
    let result;
    if (typeof name === "string" || name === undefined) {
      name2 = { [name]: name };
    } else {
      name2 = name;
    }
    // 全变为 对象, 
    const name3 = Object.entries(name2)
      .filter(kv => kv[1])
      .map(item => item[0]);
    result = name3
      .map(name => [prefix, name].filter(Boolean).join("-"))
      .join(" ");

    return result;
  };
}

// 4 使用 三元表達式 提取 if else
function addPrefixAndMergeClass(prefix: string) {
  return (name: string | ClassToggles) => {
    const namesObject =
      typeof name === "string" || name === undefined ? { [name]: name } : name;
    // 去掉不用的變量
    const scoped = Object.entries(namesObject)
      .filter(kv => kv[1])
      .map(item => item[0])
      .map(name => [prefix, name].filter(Boolean).join("-"))
      .join(" ");

    return scoped;
  };
}

// 5. 使用判断 string 的 改为判断是否是 object, 并把普通函数改为箭头函数
const addPrefixAndMergeClass = (prefix: string) => (
  name: string | ClassToggles,
  options: Options
) =>
  Object.entries(name instanceof Object ? name : { [name]: name })
    .filter(kv => kv[1] !== false)
    .map(item => item[0])
    .map(name => [prefix, name].filter(Boolean).join("-"))
    .concat((options && options.extra) || [])
    .join(" ");

```

