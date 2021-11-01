1. `lib/helpers/`
```
- classes.tsx ==> icon 的 className 函数
- __tests__ ==>  classes 的测试函数
```

2. `snapshot` 测试里面的快照, 每次都跟上一次正确的作对比

3. travis.ci   CI 集成工具

4. 发布: 入口 `index.tsx` 导出需要的组件, `npm publish`

5. 创建自己的官网
  - `layout.tsx` 使用 其他子组件 默认导出 `export { default as Header } from "./header";`
  - 我把 `views/` 下面的文件 当做自己的展示页面
  - 搜索 `logo marker` 制作免费logo
  - 展示自己的`源代码`, `raw-loader` `prism-react-renderer 高亮`
  - [prism-react-renderer](https://openbase.com/js/prism-react-renderer/documentation)
