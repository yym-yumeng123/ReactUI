# Input

### 用例图
- 4种状态: default focus hover disabled/readonly

1. 用户 -> 输入数据 -> 好看的样式
2. 用户 -> 可以在输入框前面加一个默认前缀
3. 用户 -> 可以在输入框后面加一个默认前缀
4. 用户 -> 不同的 size
5. 用户 -> 不可点击input
6. 用户 -> 可以删掉当前输入


### 难点
1. 开始我是设置 简单的 css 样式, 把 wrapper 和 input 的 disabled 分开写, 使用 css 权重规则来修改 css
2. 后面我想加一个 icon , 但是不能在 wrapper 上 写 定位, 因为加了 append 或者 prepend 导致 定位失效,
3. 然后我在 input 外面再加了一层 inputWrap, 把 disabled size 属性 放到了 上面
4. 后面我又发现了一个问题, 当我给 带有 前缀或者后缀的 input set size 时, 样式又会不协调, 
5. 于是我看了一下我的 class , 在两个wrapper 分别加了, 我思考了一下, 修改成全部放在最外层, 根据 class, 来修改下层的样式, 
6. 每次有对应参数 的 class 时, 调节下面 元素的 样式
