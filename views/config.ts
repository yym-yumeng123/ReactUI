import All from "lib/All/all";
import {
  IconDemo,
  ButtonDemo,
  CardDemo,
  DialogDemo,
  LayoutDemo,
  ToastDemo,
  // TODO: ...
  PagerDemo,
  RadioDemo,
  CheckboxDemo,
  TableDemo,
  TreeDemo,
  ScrollExample,
  InputExample,
  AutoCompleteExample,
  SwitchExample,
  FormExample,
  TabsExample,
  GridExample,
  PopoverExample,
  CollapseExample,
} from "../example";

export const routeList: Array<{
  path: string;
  title: string;
  component: any;
}> = [
  {
    path: "/all",
    title: "组件总览",
    component: All
  },
  {
    path: "/icon",
    title: "Icon 图标",
    component: IconDemo
  },
  {
    path: "/button",
    title: "Button 按钮",
    component: ButtonDemo
  },
  {
    path: "/card",
    title: "Card 卡片",
    component: CardDemo
  },
  {
    path: "/dialog",
    title: "Dialog 弹窗",
    component: DialogDemo
  },
  {
    path: "/layout",
    title: "Layout 布局容器",
    component: LayoutDemo
  },
  {
    path: "/toast",
    title: "Toast 全局提示",
    component: ToastDemo
  },
  // TODO: 下面没写文档
  {
    path: "/pager",
    title: "Pager 分页",
    component: PagerDemo
  },
  {
    path: "/radio",
    title: "Radio 单选框",
    component: RadioDemo
  },
  {
    path: "/checkbox",
    title: "CheckBox 多选框",
    component: CheckboxDemo
  },
  {
    path: "/table",
    title: "Table 表格",
    component: TableDemo
  },

  {
    path: "/form",
    title: "Form 表单",
    component: FormExample
  },
  {
    path: "/tree",
    title: "Tree 树",
    component: TreeDemo
  },
  {
    path: "/scroll",
    title: "Scroll 滚动",
    component: ScrollExample
  },
  {
    path: "/input",
    title: "Input 输入框",
    component: InputExample
  },
  {
    path: "/autoComplete",
    title: "AutoComplete 自动完成",
    component: AutoCompleteExample
  },
  {
    path: "/switch",
    title: "Switch 开关",
    component: SwitchExample
  },
  {
    path: "/tabs",
    title: "Tabs 标签",
    component: TabsExample
  },
  {
    path: "/grid",
    title: "Grid 栅格布局",
    component: GridExample
  },
  {
    path: "/popover",
    title: "Popover 气泡卡片",
    component: PopoverExample
  },
  {
    path: "/collapse",
    title: "Collapse 折叠面板",
    component: CollapseExample
  },

];
