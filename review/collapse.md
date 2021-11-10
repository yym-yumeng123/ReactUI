# 折叠面板

### 创建文件 & api 使用方法
- `collapse.tsx`
- `collapseItem.tsx` 子组件
```js
<Collapse>
  <CollapseItem title="内容1">1111</CollapseItem>
  <CollapseItem title="内容2">2222</CollapseItem>
  <CollapseItem title="内容3">33333</CollapseItem>
</Collapse>
```

### api 分析
1. Item
  - open state, 是否打开内容
2. Collapse
  - single props: 是否每次只打开一个