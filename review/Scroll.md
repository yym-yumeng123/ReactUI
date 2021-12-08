# 滚动条

1. 纯 css 实现 scrollbar
2. 原生滚动条无法下拉更新

### 滚动条思路:

1. 我们在外面创建一个 div, 让用户设置宽高, 把它设为 `overflow: hidden`, 超出这个范围就隐藏
2. 在里面的 div.inner, 是有原始滚动条的, 里面的要和外面的高度一样高, `position: absolute, top: 0, ...`, 但是变宽

- 里面的变宽: 设置 绝对定位: `right: -滚动条宽度`, 外面`overflow: hidden` 把滚动条里面的超出隐藏, 看不见旧的滚动条,但是它存在

3. 自己 弄一个 滚动样式 放在右边, 计算 `窗口高度/总高度 = 滚动块高度/窗口高度` 的一个等比例缩小

### 自定义滚动条

1. `scrollHeight`: 可见加上不可见的高度
2. `scrollTop`: 滚动的高度
3. `可视区域的高度`

```js
scrollTop / scrollHeight = 滑块距离上面的高度 / 可视区域的高度
==>
滑块距离上面的高度 = scrollTop * 可视区域的高度 / scrollHeight

可视区域的高度 / scrollHeight = 滑块高度 / 可视区域的高度
==>
滑块高度 = 可视区域的高度 * 可视区域的高度 /  scrollHeight

```

### 拖动滚动条

1. 使用 `mousedown mousemove mouseup`
2. 把 `move up` 事件放到外面, 影响范围大一点

```js
useEffect(() => {
  document.addEventListener("mousemove", onMouseMoveBar);
  document.addEventListener("mouseup", onMouseUpBar);
  document.addEventListener("selectstart", onSelect);
  return () => {
    document.removeEventListener("mousemove", onMouseMoveBar);
    document.removeEventListener("mouseup", onMouseUpBar);
    document.removeEventListener("selectstart", onSelect);
  };
}, []);
```
