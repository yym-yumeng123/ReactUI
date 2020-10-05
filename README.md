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
├── test
│   ├── __mocks__
│   ├── __tests__
│   └── setupTests.js
├── .gitignore  // 忽略某些文件不需要提交
├── .travis.yml
├── demo.tsx
├── doc.sh
├── example.html
├── example.scss
├── example.tsx
├── jest.config.js
├── junit.xml
├── LICENSE
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

1. `lib/helpers/`
```
- classes.tsx ==> icon 的 className 函数
- __tests__ ==>  classes 的测试函数
```
