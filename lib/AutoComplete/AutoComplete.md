## Props 解析

1. `fetchSuggestions: Function`
当用户再输入框中, 输入值, 希望返回的结果是什么样的? 是一个函数, 用户使用这个函数返回想要的结果, `return`, 
里面会处理返回值, 显示在输入框下面

希望值是一个 带有 value 的对象

2. `onSelect: Function`
当结果出现可选择的值时, 用户选择对应的结果

3. `renderOption: Function ReactElement`
可以改变下拉的渲染, 可以是一个元素

4. `value: string` 默认值
