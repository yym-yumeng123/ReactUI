# 树形组件

### 用例

- 展示数据
  - 确定 API
  - 递归组件
- 选中
  - 单选/多选

### props

- sourceData: 源数据

```js
const [treeArray] = useState([
  {
    title: "1",
    key: "1",
    children: [
      {
        title: "1.1",
        key: "1.1",
        children: [
          { title: "一之一之一", key: "1.1.1" },
          { title: "一之一之二", key: "1.1.2" }
        ]
      },
      { title: "1.2", key: "1.2" }
    ]
  },
  {
    title: "二",
    key: "2",
    children: [
      { title: "二之一", key: "2.1" },
      { title: "二之二", key: "2.2" }
    ]
  }
]);
```


### ts

```ts
// 递归 ts
interface SourceDataItem {
  title: string;
  key: string;
  children: SourceDataItem[]
}

interface Props {
  sourceData: SourceDataItem[]
}

```

### 升级一个包?
```bash
npm info typescript version // 查看包的版本
```

### 递归渲染
- 就是递归调用一个函数
