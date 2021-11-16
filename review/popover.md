# popover 气泡卡片

### 需求
- hover/click 激活


### 问题: 
1. popover 位置问题
  - 需要使用动态赋值, ref `getBoundingClientRect` 获取值
2. 放到 body
  - 解决被 `overflow: hidden` 影响
3. top 问题: 当出现滚动条时 ==> top + window.scrollY
  - `window.scrollY` 距离上面的滚动距离
4. bind(this) => 会返回一个新函数
5. 事件机制, 冒泡问题待解决


### 待解决的问题:
1. 鼠标移入 消失的问题
  - 在 子元素 和 pop 元素上, 都写上两个事件: mouseenter mouseleave
  - 子元素离开 一定时间后才关闭, 进入 pop, 打开, 这样一直打开
2. 关闭 api TODO...

3. 可以吧 三角形放入 border 里面


### 点击按钮 & popover 不消失, 其他消失
```js
<div>
  <div class="pop" ref="popRef"></div>
  <div class="trigger" ref="triggerRef"></div>
</div>

// 1. 点击 trigger, body 里的 pop 显示
// 2. 当点击 pop 里的 element return, 其它的隐藏 pop
// 点击后处理的事情
const listener = (event: MouseEvent) => {
  // ref.current 不存在 or ref dom 包括点击的内容 popRef
  if (!ref.current || ref.current.contains(event.target as HTMLElement)) {
    return;
  }
  handler(event);
};
document.addEventListener("click", listener);
return () => {
  document.removeEventListener("click", listener);
};

// hover 进入 content 消失, 思路: 创建定时器 300ms 后再关, 如果鼠标在这个时间里进入了 不管, 反之. 鼠标离开不进入就关了
```
