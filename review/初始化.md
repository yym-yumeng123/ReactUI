## 1.工具

```
Yarn 命令行工具
webpack4 打包工具
webpack-dev-sever3 基本的 web server，并且具有 live reloading(实时重新加载)
VsCode 编辑器
TypeScript 编程语言
```

## 2.仓库

```
Github 创建仓库
Git
```

## 3.初始化

```
npm init -y // 初始化仓库 package.json

npm install webpack webpack-cli --save-dev // 安装到开发者依赖 webpack

lib/index.tsx // 入口
```

## 4.配置 webpack

```
1. 创建 webpack.config.js // 参考 [https://webpack.docschina.org/guides/]
- entry // 入口
- output  / 出口
- module ==> rules  // 规则

2. 安装 npm install --save-dev typescript ts-loader 或者 awesome-typescript-loader // tsconfig.json

3. npm install --save-dev webpack-dev-server
4. .gitignore
```

```
什么是 umd ?
前端最开始没有包管理工具
1. require.js ==> AMD 异步模块定义
2. node.js ==> commonJS ==> module.exports

3. UMD ==> 统一模块定义 ==> if(AMD) else if(commonJS)
```

```
--save-dev
--save 

1. 如果只给程序员用 --save-dev
2. 程序员和用户都要用 --save

3. 默认 --save
4. 缩写: --save ==> -S --save-dev ==> -D 
```

## 5.显示html
```
npm install --save-dev html-webpack-plugin  // 插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle
```
