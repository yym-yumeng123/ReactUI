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

- Item => level 不同的 level 样式不一样

### ts

```ts
// 递归 ts
interface SourceDataItem {
  title: string;
  key: string;
  children: SourceDataItem[];
}

interface Props {
  sourceData: SourceDataItem[];
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
});
```

### 全选/半选

1. 往下走: 当我选择某个值, 我要通过递归 获取所有的 children 值, 然后拍平放到一个数组里, 然后触发 change 事件 告诉外面, 把选中的值和 子元素的 值都传到 最外面, 我最外面接受到 selected 变化, 在告诉下面更新 checked, 一个单项数据流

2. 往上走: 当我选择某个值时, 我知道父元素传过来的 值, 也知道子元素所有的值, 我不直接告诉最外面, 我告诉我的 上一级 , 上一级再告诉上一级, 直到最外面的值,

- 在往外告诉上一级值时, 我通过查看 `选择的值` 和 `收集的子元素的值` 有相同的, 就把 `[选中的值 上一级的值]` 告诉上一级, 然后一级一级往外传, 设置 checked 的样式为半选, 如果没有交集了, 就过滤掉

### 功能展望

1. 删除节点

- 修改 sourceData, 点击删除后: 找出数组中没有删除的东西, 把 data 重新渲染

2. 异步加载

- 更新 data, 重新渲染

3. 搜索

- 搜索的结果应该是 列表, 放在原 树上面
