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

- Item => level 不同的level 样式不一样


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

### 折叠动画
- 折叠只会折有子代的元素
```jsx
// 展开/折叠 是高度的变化

// 第一次不渲染
import { useEffect, useRef } from "react";
const useUpdateCollapse = (dep: boolean, fn: () => void) => {
  const isFirst = useRef(true);
  // 是否第一次
  useEffect(() => {
    if (isFirst.current === true) {
      isFirst.current = false;
      return;
    }
    fn();
  }, [dep]);
};

export default useUpdateCollapse;

useUpdateCollapse(依赖, () => {
  // 展开/收起时修改高度变化
})
```


### 功能展望
1. 删除节点
  - 修改 sourceData, 点击删除后: 找出数组中没有删除的东西, 把 data 重新渲染
2. 异步加载
  - 更新 data, 重新渲染
3. 搜索
  - 搜索的结果应该是 列表, 放在原 树上面
