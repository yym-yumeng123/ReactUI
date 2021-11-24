# Radio

1. 样式优化: 使用 label 包裹元素, span 设置一个默认的 样式, 隐藏 input[type=radio] 的样式
2. input value= {value || children}
3. 显示的 span={childern || value}

4. 单独的 raido, name === '', group 的 name === 'group'
### props

1. checked

- 单个 radio 默认 checked = false
- children 可以是任何 html 元素,
- value 只能是字符串 ==> 有 value change 返回 value, 无 value 返回 children
