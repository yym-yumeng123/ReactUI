## 1. git 技巧

```
一个仓库 上传两个地方

git remote add othername git@github.com/地址

git push -u othername master // 上传到 其他地址的 master 分支
```

## 2.命令

- 把常用命令 放到 `package.json` 的 `script` 里

```
"start": "cross-env NODE_ENV=development webpack-dev-server --config webpack.config.dev.js",
```

## 3. 安装 react 相关的 ts 依赖

```
yarn add @types/react --dev  // 自己使用 --dev
yarn add @types/react-dom --dev
```

## 4.webpack resolve

```
resolve: { // 配置模块如何解析
  extensions: ['.ts', '.tsx']  //  尝试按顺序解析这些后缀名
}
```

## 5.webpack mode

```
development & production

开发环境 & 生产环境

externals: {
  react: {
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react',
    root: 'React'
  },
  'react-dom': {
    commonjs: 'react',
    commonjs2: 'react',
    amd: 'react',
    root: 'React'
  }
}
externals 配置选项提供了「从输出的 bundle 中排除依赖」的方法

root：可以通过一个全局变量访问 library（例如，通过 script 标签）。
commonjs：可以将 library 作为一个 CommonJS 模块访问。
commonjs2：和上面的类似，但导出的是 module.exports.default.
amd：类似于 commonjs，但使用 AMD 模块系统
```

```
// development 切换 mode

webpack.config.js  // 共有属性
webpack.config.dev.js // 开发所需属性
webpack.config.prod.js // 生产所需属性

使用 Object.assign()
```

## 6. tsconfig.json
- 配置如何使用 ts, 以及检测 ts 文件使用等

## 7. 测试使用 jest
- Jest 是一款优雅、简洁的 JavaScript 测试框架
