## Icon

### 设计 API
```html
<Icon name="xxx">
```

```ts
interface IconProps {
  name: string
}

/** 
 * <> 代表这个类型接受一个参数, 不传代表无限制
 */
const Icon: React.FunctionComponent<IconProps> = (props) => {}
```


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


### 动态加载 很多 icon
```js
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)
try {
  importAll(require.context('../../assets/icons/', true, /\.svg$/))
} catch (error) {
}

```

### tree-shaking
- 使用 importAll 一次性引入, 无法使用 tree-shaking技术
