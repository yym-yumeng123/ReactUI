# 分页

> 需要显示的那几页 `[第一页, 当前页-2, 当前页-1 当前页, 当前页+1, 当前页+2, 最后一页]`, 我们需要先过滤, 在排序, 然后 如果小于 7 页, 则展示 `1 2 3 4 5 6 7`, 如果大于 7 页, 我们生成一个新的数组, 把原有数组, 如果 数组的下一项的值 - 数组当前项的值 > 1, 给新数组添加 ... `[第一页, ...,
 当前页-2, 当前页-1 当前页, 当前页+1, 当前页+2, ..., 最后一页]`

### 用例

1. 用户 -> 查看默认页数
2. 用户 -> 点击页数跳转
3. 用户 -> 上一页 下一页

### props

1. totalPage 总页数
2. current 当前在第几页, 默认 1
3. change 事件
4. 只有一页 是否隐藏 左右

### html 结构

```html
<div className="父元素">
  <span className="上一页">
    <Icon name="arrow-left-bold" />
  </span>
  主要分页显示
  <span className="下一页">
    <Icon name="arrow-right-bold" />
  </span>
</div>
```

### 一个面试题

```js
let array = ['1','2','3']
let number = array.map(parseInt) // [1, NaN, NaN]

==>

map 会有三个参数
array.map(parseInt(item, index, array))
parseInt('1', 0, array) // 第2个参数 进制
parseInt('2', 1, array)
parseInt('3', 2, array)
```
