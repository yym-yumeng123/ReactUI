1. `lib/helpers/`
```
- classes.tsx ==> icon 的 className 函数
- __tests__ ==>  classes 的测试函数
```

2. `snapshot` 测试里面的快照, 每次都跟上一次正确的作对比

3. travis.ci   CI 集成工具

4. 发布: 入口 `index.tsx` 导出需要的组件, `npm publish`
