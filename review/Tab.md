## props 

> TabPane: name 相当于 key, 父级告诉子元素我要选哪个?
> 显示内容, 也可以使用 css 显示隐藏

# Tabs

### 需求分析
- 用户 -> 切换 tab
- 用户 -> tab 里有 icon
- 右侧加按钮
- disabled
- 横竖 tab (未做)


### 原理
- 我有一个默认的 active, 当我切换对应的 tab, 修改 active 对应的 tab
- 下面显示区域, 和上面active 对应, 非 active 隐藏
