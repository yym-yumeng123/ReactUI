# Table 表格

### 用例图
1. 用户 -> 展示tabel(带边框? 大小? 单双颜色?)
2. 用户 -> 选中数据(单选/多选)
3. 展示排序
4. 固定表头
4. 可展开


### 实现

1. 原生 table 的样式优化

```html
<table>
  <thead>
    <tr>
      <th></th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td></td>
    </tr>
  </tbody>
</table>
```

### checkbox props 
1. 给表头添加 checkbox, 给下面添加 checkbox, 表头的 `checkbox` 为 true 的条件: `下面选中的数据的 length === dataSource.length`, 反之: `选中数据.length === 0` 
2. 所以给table 添加一个 `selectedRows props` , 每次选中时 添加进去, 取消时删除掉, 点击表头全选时, `selectedRows === dataSource`

### 排序
1. 前端只做 页面变化, 具体排序交给后端

### for 循环 搭配 key
- 给每一项唯一的 id | key, 可以对比新元素 和旧元素


### 判断两个数组元素一样
```js
const a = [{id: 1}, {id: 12}]
const b = [{id: 1}, {id: 2}]

// map 不会改变原数组, sort() 会改变原数组
const a1 = a.map(i => i.id).sort() // 字典序
const b1 = a.map(i => i.id).sort() // 字典序

let equal = true
if(a.length === b.length) {
  for(let i = 0; i<a.length; i++) {
    if(a[i] !== b[i]){
      equal = false
      break
    }
  }
}
```
