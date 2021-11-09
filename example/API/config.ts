export const columns = [
  {
    title: "属性",
    key: "props"
  },
  {
    title: "说明",
    key: "explain"
  },
  {
    title: "类型",
    key: "type"
  },
  {
    title: "默认值",
    key: "defaultValue"
  },
  {
    title: "必填",
    key: "require"
  }
];

export const Api_Data_Icon = [
  {
    props: "name",
    explain: "设置 icon 的名称, 显示对应的 icon",
    type: "string",
    defaultValue: "/",
    require: "true"
  },
  {
    props: "color",
    explain: "设置 icon 的颜色",
    type: "string",
    defaultValue: "#000",
    require: "false"
  },
  {
    props: "size",
    explain: "设置 icon 的大小, 单位 px",
    type: "string",
    defaultValue: "2em",
    require: "false"
  },
  {
    props: "spin",
    explain: "设置 icon 的旋转动画, 是否旋转",
    type: "boolean",
    defaultValue: "false",
    require: "false"
  },
  {
    props: "onClick/onMouseEnter/onMouseLeave/...",
    explain: "触发 icon 的事件",
    type: "Function",
    defaultValue: "/",
    require: "false"
  }
];

export const Api_Data_Button = [
  {
    props: "level",
    explain: "设置 button 的类型, 显示对应颜色的 button",
    type: "default | primary | danger | link",
    defaultValue: "default",
    require: "false"
  },

  {
    props: "disabled",
    explain: "设置 button 是否可点击",
    type: "boolean",
    defaultValue: "false",
    require: "false"
  },
  {
    props: "block",
    explain: "将按钮宽度调整为其父宽度的选项",
    type: "boolean",
    defaultValue: "false",
    require: "false"
  },
  {
    props: "size",
    explain: "设置按钮大小",
    type: "lg | sm | xs",
    defaultValue: "默认大小",
    require: "false"
  },
  {
    props: "href",
    explain:
      "点击跳转的地址，指定此属性 button 的行为和 a 链接一致, type = link",
    type: "string",
    defaultValue: "空",
    require: "false"
  }
];

export const Api_Data_Card = [
  {
    props: "title",
    explain: "设置卡片的标题",
    type: "string",
    defaultValue: "/",
    require: "true"
  },
  {
    props: "extra",
    explain: "可以在标题的右边设置额外的元素",
    type: "ReactElement",
    defaultValue: "/",
    require: "false"
  }
];

export const Api_Data_Dialog = [
  {
    props: "visible",
    explain: "设置 Dialog 对话框的显示隐藏",
    type: "boolean",
    defaultValue: "false",
    require: "true"
  },
  {
    props: "title",
    explain: "设置 Dialog 对话框的标题",
    type: "string",
    defaultValue: "标题",
    require: "false"
  },
  {
    props: "closable",
    explain: "设置 Dialog 右上角的 关闭 icon 是否存在",
    type: "boolean",
    defaultValue: "true",
    require: "false"
  },
  {
    props: "maskClosable",
    explain: "点击遮罩层是否关闭对话框",
    type: "boolean",
    defaultValue: "true",
    require: "false"
  },
  {
    props: "footer",
    explain: "设置对话框底部的内容, 使用 <Fragment> 包裹元素",
    type: "ReactElement | null",
    defaultValue: "ReactNode",
    require: "false"
  },
  {
    props: "onOkText",
    explain: "设置对话框底部确认按钮的文字",
    type: "string",
    defaultValue: "确定",
    require: "false"
  },
  {
    props: "onCancelText",
    explain: "设置对话框底部取消按钮的文字",
    type: "string",
    defaultValue: "取消",
    require: "false"
  },
  {
    props: "onOk",
    explain: "确认按钮回调",
    type: "React.MouseEventHandler",
    defaultValue: "/",
    require: "false"
  },
  {
    props: "onCancel",
    explain: "取消按钮回调",
    type: "React.MouseEventHandler",
    defaultValue: "/",
    require: "false"
  }
];

export const Api_Data_Layout = [
  {
    props: "className",
    explain: "容器 className",
    type: "string",
    defaultValue: "/",
    require: "false"
  }
];

export const Api_Data_Toast = [
  {
    props: "content",
    explain: "toast 提示框的内容",
    type: "string",
    defaultValue: "/",
    require: "true"
  },
  {
    props: "autoClose",
    explain: "toast 提示框是否自动关闭",
    type: "boolean",
    defaultValue: "true",
    require: "false"
  },
  {
    props: "autoCloseDelay",
    explain: "toast 提示框栓设置关闭时间",
    type: "number",
    defaultValue: "3",
    require: "false"
  },
  {
    props: "onClose",
    explain: "toast 关闭弹框的回调",
    type: "function",
    defaultValue: "/",
    require: "false"
  }
];

export const Api_Data_Grid = [
  {
    props: "span",
    explain: "col 组件的属性, 栅格占位格数，范围为 1..24",
    type: "number",
    defaultValue: "/",
    require: "true"
  },
  {
    props: "offset",
    explain: "col 组件的属性, 栅格左侧的间隔格数,距离左边的距离",
    type: "number",
    defaultValue: "0",
    require: "false"
  },
  {
    props: "/",
    explain: "/",
    type: "/",
    defaultValue: "/",
    require: "/"
  },

  {
    props: "gutter",
    explain: "Row 组件的属性, 每个栅格之间的距离, 空隙",
    type: "number",
    defaultValue: "0",
    require: "false"
  },
  {
    props: "align",
    explain: "Row 组件的属性, 水平方向的对齐方式: 左中右",
    type: "left | center | right",
    defaultValue: "left",
    require: "false"
  }
];

export const Api_Data_Input = [
  {
    props: "value",
    explain: "输入框内容",
    type: "string",
    defaultValue: "/",
    require: "false"
  },
  {
    props: "size",
    explain: "输入框大小",
    type: "lg | sm | xs",
    defaultValue: "默认大小",
    require: "false"
  },
  {
    props: "disabled",
    explain: "是否禁用输入框",
    type: "boolean",
    defaultValue: "false",
    require: "false"
  },
  {
    props: "closable",
    explain: "清空输入孔内容 按钮 是否显示",
    type: "boolean",
    defaultValue: "false",
    require: "false"
  },
  {
    props: "prepend",
    explain: "在输入框前面添加前缀",
    type: "string | ReactElement",
    defaultValue: "/",
    require: "false"
  },
  {
    props: "append",
    explain: "在输入框后面添加后缀",
    type: "string | ReactElement",
    defaultValue: "/",
    require: "false"
  },
  {
    props: "onClear",
    explain: "清空输入孔内容回调",
    type: "function",
    defaultValue: "/",
    require: "false"
  },
  {
    props: "onChange",
    explain: "change 事件",
    type: "ChangeEventHandler<HTMLInputElement>",
    defaultValue: "/",
    require: "false"
  },
  {
    props: "onFocus/onBlur/...",
    explain: "Input 其它事件",
    type: "FocusEventHandler<HTMLInputElement>",
    defaultValue: "/",
    require: "false"
  }
];

export const Api_Data_Tabs = [
  {
    props: "active",
    explain: "Tabs 组件的属性, 默认展示哪一个 tab",
    type: "string",
    defaultValue: "/",
    require: "true"
  },
  {
    props: "extra",
    explain: "Tabs 组件的属性, 在tab右边添加一个额外的属性",
    type: "ReactNode",
    defaultValue: "/",
    require: "false"
  },
  {
    props: "onChange",
    explain: "Tabs 组件的属性, 当点击 tab 时回调",
    type: "(name) => void",
    defaultValue: "/",
    require: "false"
  },
  {
    props: "------",
    explain: "------",
    type: "------",
    defaultValue: "------",
    require: "------",
  },
  {
    props: "title",
    explain: "TabPane 组件的属性, 展示 tab 的 title",
    type: "string",
    defaultValue: "/",
    require: "true"
  },
  {
    props: "name",
    explain: "TabPane 组件的属性, 相当于给 TabPane 设置一个默认的 key",
    type: "string",
    defaultValue: "/",
    require: "true"
  },
  {
    props: "icon",
    explain: "TabPane 组件的属性, 可以在 title 添加 icon, 值为 icon 的 name ",
    type: "string",
    defaultValue: "/",
    require: "false"
  },
];
