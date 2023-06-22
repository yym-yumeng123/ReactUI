# Grid

简介: 把一个 div 分成 n 个 部分, 默认 24 份, 每个部分有空隙 或者无空隙

> `gutter` 排水沟, 空隙

### api 设计

```js
// 一个页面横向默认分成 24 份, 分成两份, 就是左边 12 份, 右边 12份
<Row>
  <Col span={12}></Col>
  <Col span={12}></Col>
</Row>

// gutter 间距
<Row gutter={20}>
  <Col span={8}></Col>
  <Col span={8}></Col>
  <Col span={8}></Col>
</Row>
```

### 原理

1. 看到上面的 row 组件 和 col 组件, 所以我们创建一个 Row 组件, 里面只能放入 col 元素
2. col 组件. 有一个动态的 class 根据传入的 span = '1..24' , 每个占比不同, 可以使用 scss 的 函数来弄

```scss
// class 前缀
$class-prefix: yui-col;
// 循环获取宽度
@for $n from 1 to 24 {
  &.#{$class-prefix}-#{$n} {
    width: ($n / 24) * 100%;
  }
}
```

3. offset: 偏移
   offset + span = 24

```scss
// 设置 margin-left
$class-prefix: yui-col-offset;
@for $n from 1 to 24 {
  &.#{$class-prefix}-#{$n} {
    margin-left: ($n / 24) * 100%;
  }
}
```

4. gutter => gutter row 的 props => 再次传到子组件 col 上

- 1. 在 row 上 有一个 负 `margin`
- 2. 在 col 上有一个 `padding`

### 代码重构

1. 重复的代码
2. 看不太懂的代码
