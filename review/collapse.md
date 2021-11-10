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
  - title props: 默认标题
  - name props: 唯一的, selected 数组里面包含默认打开
2. Collapse
  - single props: 是否每次只打开一个
  - selected props: 选择初始默认打开的


### 原理
1. 父元素 `Collapse React.children.map` 子元素, `React.cloneElement` 第二个参数, 传递 props 个子组件 `CollapseItem`
2. 循环的时候会有一个 `element[]` 下标, 创建一个 index 为 -1, 每次点击子组件 `item` 赋值
3. 设置一个 boolean 值, 当 下标 === 其中一个下标, 值为 true, 其他为 false, 传给子组件 
4. `CollapseItem 组件` 判断当 single 为 true, 时, 使用 props 判断展开关闭, 否则使用自身 `state open`
5. 默认展开 selected 为 [], 进入页面, 判断 `selected.indexOf(name) > -1` name 在数组中吗
