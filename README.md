# ReactUI

[![Build Status](https://travis-ci.org/yym-yumeng123/ReactUI.svg?branch=master)](https://travis-ci.org/yym-yumeng123/ReactUI)

```
运行生成文档脚本  sh doc.sh
```


git 技巧
```
// 将代码上传到多个仓库
git remote add xxx git@github.com:yym/yyy.git

git push -u xxx master
```

### 目录结构
```
ReactUI
├── assets
│   └── icons
├── doc
├── lib
│   ├── @types  // ts 需要的文件配置
│   ├── button
│   ├── Dialog
│   ├── Form
│   ├── helpers
│   ├── Icon  // icon组件
│   ├── Layout
│   ├── styles
│   ├── utils
│   ├── index.d.ts
│   └── index.tsx
├── test  // 测试配置
│   ├── __mocks__
│   ├── __tests__
│   └── setupTests.js
├── .gitignore  // 忽略某些文件不需要提交
├── .travis.yml  // https://travis-ci.org/  自动测试集成
├── demo.tsx
├── doc.sh
├── example.html
├── example.scss
├── example.tsx
├── jest.config.js  // jest 测试配置
├── junit.xml  // 测试生成的 xml 文件
├── LICENSE  // 协议
├── logo.png
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.test.json
├── tslint.json
├── webpack.config.dev.js  // dev 环境配置
├── webpack.config.doc.js
├── webpack.config.js  // local 配置
├── webpack.config.prod.js  // prd
└── yarn.lock
```

- views 入口文件

- example 例子文件夹
- lib 源代码文件夹
- assert 图标以及图片资源

// raw-loader 用于显示组件代码
一个可以用于加载文件作为字符串使用的加载器

// prism-react-renderer
语法高亮


// const isTouchDevice: boolean = "ontouchstart" in document.documentElement; 判断是否触摸设备


--- 

### 先记录, 后整理

`/lib/@types` 配置 ts 里面的 一些 类型
`/lib/Helpers/classes.tsx`
```js
/**
 * @description 接受多个 class
 * @param names class 数组
 */
function classes(...names: (string | undefined | boolean)[]) {
  // ... 会把参数转为数组
  return names.filter(Boolean).join(" ");
}
export default classes
```

- `deploy.sh` 修改发布版本并 push
