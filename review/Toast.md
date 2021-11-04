# Toast 组件

当用户完成某个操作后, 弹出提示, 来告诉用户完成还是失败, 相当于面包机, 时间到了, 就把面包弹出来

### 用例图
- 用户 -> 弹出 Toast -> 自动关闭 
- 用户 -> 弹出 Toast -> 点击后关闭 -> (回调)
- 用户 -> 弹出 Toast -> 设置几秒关闭
- 用户 -> 弹出 Toast -> 弹出第2个 (保证只有一个)
- 用户 -> 弹出 Toast -> 弹出第2个 (允许多个)

### 展示多个 toast 
1. 在创建 toast 组件时, 先创建一个 id 唯一 的 div(wrapper), 放进body , `document.body.appendChild()`
2. 给 div 写样式, 放在 toast 出现的地方, `position: fixed`
3. 在我们创建toast 的时候, `创建一个div`, 然后把这个 div 放进  `wrapper`
4. 我们把我们要渲染的 taost `放进 div`
