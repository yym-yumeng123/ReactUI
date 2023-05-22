# ReactUI

[![npm version](https://badge.fury.io/js/yym-react-ui.svg)](https://badge.fury.io/js/yym-react-ui)

## 介绍

这是我使用`React + Hooks + TypeScript` 手写的一个 UI 框架, [UI 原型地址](https://rsuitejs.com/design/default/index.html#artboard5), 高度还原 UI

### 安装

#### npm 安装

推荐使用 `npm` 的方式安装，它能更好地和 `webpack` 打包工具配合使用。

```
npm i yym-react-ui
```

### 开始使用

> 现版本我只放开了 4 个 UI 组件分别是 `Icon Button Card Layout`, 后面我会开放更多的 UI 组件

1. 引入 UI 组件库

```js
import { Card, Button, Icon } from "yym-react-ui";
```

2. 使用

```js
// 更多内容参考文档
<Card
  title="我是带额外的元素的标题"
  extra={<Button level="primary">更多...</Button>}
>
  我是内容
  <Icon name="social_sina" />
</Card>
```

## 文档

`

> 因为 `github.io` 的原因, 暂时无法预览, 不过你可以把仓库 `clone` 到本地代码, 运行 `yarn start` 启动项目, 就可以看到文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
