# Table 表格

### 用例图

1. 用户 -> 展示 tabel(带边框? 大小? 单双颜色?)
2. 用户 -> 选中数据(单选/多选)
3. 展示排序
4. 固定表头
5. 可展开

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
2. 所以给 table 添加一个 `selectedRows props` , 每次选中时 添加进去, 取消时删除掉, 点击表头全选时, `selectedRows === dataSource`

### 排序

1. 前端只做 页面变化, 具体排序交给后端

### for 循环 搭配 key

- 给每一项唯一的 id | key, 可以对比新元素 和旧元素

### 判断两个数组元素一样

```js
const a = [{ id: 1 }, { id: 12 }];
const b = [{ id: 1 }, { id: 2 }];

// map 不会改变原数组, sort() 会改变原数组
const a1 = a.map(i => i.id).sort(); // 字典序
const b1 = a.map(i => i.id).sort(); // 字典序

let equal = true;
if (a.length === b.length) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      equal = false;
      break;
    }
  }
}
```

### 固定表头

> 给 table 一个 height 属性, 超出 height, 自动滚动 `overflow-y`

1. 传给 table 一个 固定的高度, 超出 `overflow:auto`
2. 克隆 table, 只留下 `thead`, 覆盖在原 table 上,
3. 计算原 table 的 每一个 th 的 width, 赋值给 table 副本 的 th, 这样, 宽度一致

```js
const updateHeaderWidth = (tableCarbon: 副本) => {
  // 获取原 table 的 thead
  const tableHeader: any = Array.from(tableRef.current.children).filter(
    (i: any) => i.tagName.toLowerCase() === "thead"
  )[0];

  // table header 副本
  let tableHeaderCarbon: any;

  // table 副本
  Array.from(tableCarbon.children).map((node: any) => {
    if (node.tagName.toLowerCase() !== "thead") {
      node.remove();
    } else {
      tableHeaderCarbon = node;
    }
  });

  // 获取 header 副本 的 width
  Array.from(tableHeader.children[0].children).map((th: any, index) => {
    const { width } = th.getBoundingClientRect();
    // 滚动条的宽度 + th 宽度
    tableHeaderCarbon.children[0].children[index].style.width = `${width +
      8}px`;
  });
};
```

### 遇到最难的技术问题

1. 固定表头

- 深度复制 table, 把 thead 放到 默认 table 的最上面, 问题: 宽度对不齐?
- 在获取之前 table 每个 th 的宽度, 给 复制的 table th 赋值, 问题: 事件点击我没弄好?
- `cloneNode(false)` 我现在只复制 table, 不复制里面的元素, table 副本里面添加 table 的 thead, 可以出发点击事件了, 问题: 我把原有的 第一个元素覆盖了?
- 我计算 `const { height } = tHead.getBoundingClientRect()` thead 的高度, 然后把 `table marginTop`, 第一个元素弄出来, 可以了, 问题: 宽度又对不齐了?
- 思路: 把`thead th 的宽度` = `第一行 tr 下 td 的宽度`, 宽度对不起, 和滚动条宽度每一个 th 的宽度比前一个 宽度大一点缝隙

### vue 实现

```vue
// 使用 插槽

<table-column text="名字" key="name">
  <template slot-scoped="props">
    {{props.value}}
  </template>
</table-column>

<script>
  mounted() {
    // 把标签转换为 columns 对象
    this.column = this.$slots.default.map(node => {
      let {text, key } = node.componentOptions.propsData
      let render = node.data.scopedSlots.default

      return {
        text, key, render
      }
    })
  }

  compoents: {
    // 虚拟 节点
    vnodes:  {
      functional: true,
      render: (h,ctx) => ctx.props.vnodes
    }
  }
</script>
```


### 大数据量 > 10000条数据, 如何 开始减少渲染时间
1. 我只显示当前页面视图能看到的 数据, 比如: 100条, 其它的暂不渲染
