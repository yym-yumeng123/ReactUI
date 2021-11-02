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
  },
];
