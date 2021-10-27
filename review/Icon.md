## Icon

### 设计 API
```html
<Icon name="xxx">
```

```ts
// icon 的 props 应该含有 name
interface IconProps {
  name: string
}

/** 
 * <> 代表这个类型接受一个参数, 不传 {} 代表无限制
 * Icon : 是一个函数组件, 属性类型时 IconProps
 */
const Icon: React.FunctionComponent<IconProps> = (props) => {}
```

### 使用 iconfont 的 图标
要 设置 icon 的颜色, 需要在 iconfont 上 批量去色


### icon 使用 svg 格式
- webpack 使用 `svg-sprite-loader`
- `tsconfig.json` 的 inclued 包含 那些 ts 识别
- `lib/**/*` 代表 lib 文件夹下的所有文件

```text
icon 使用 svg 标签
```

```ts
// * 使用 import from时, 需要让 svg 默认导出
// 让svg 有一个单独的导出
declare module '*.svg' {
  const content: any;
  export default content;
}

```

```js
// tsconfig.json
// 告诉 ts 这些都是我可以使用 ts 的地方
"include": [
  "lib/**/*", "example/**/*", "views/**/*"
],
// ** 的作用
** 代表所有目录

// 给 所有 svg 加一个 默认导出
declare module '*.svg' {
  const content: any;
  export default content;
}
```


### 动态加载 很多 icon
- 减少每次每个都加载
```js
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../../assets/icons/', true, /\.svg$/))
} catch (error) {
}
```

### tree-shaking
```js
import a from 'a'
import b from 'b'

...

方便使用 tree-shaking 技术 -> 使用的依赖留下, 未使用的去掉
```
- 使用 importAll 一次性引入, 无法使用 tree-shaking技术
