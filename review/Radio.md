# Radio

1. 样式优化: 使用 label 包裹元素, span 设置一个默认的 样式, 隐藏 input[type=radio] 的样式
2. input value= {value || children}
3. 显示的 span={childern || value}


---

4. 单独的 raido,`name === ''`, group 的 `name === 'group'`
5. group 设置默认选中 value, 可以激活单个子元素
6. onChange 回调事件
7. group 子元素必须是 radio, 传递 props 给 子元素
### props

1. checked

- 单个 radio 默认 checked = false
- children 可以是任何 html 元素,
- value 只能是字符串 ==> 有 value change 返回 value, 无 value 返回 children
