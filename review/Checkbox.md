# Checkbox

### 单个 Checkbox

> 只有一个复选框

1. 样式优化: 使用 label 包裹元素, span 设置一个默认的 样式, 隐藏 `input[type=checkbox]` 的样式
2. 和 `raido` 一样, 都是使用 label 包裹, 然后拍用 span 模拟 复选框, 显示一个好看的样式

> 复选框组

1. 查看 `group` 是否有默认选中的值, 如果有, 当点击 `checkbox` 查看 `checked boolean` 值, 如果 true, push , 如果 false, 从数组过滤出这个,
