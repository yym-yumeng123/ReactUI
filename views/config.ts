import All from "lib/All/all";
import {
  IconDemo,
  ButtonDemo,
  CardDemo,
  DialogDemo,
  LayoutDemo,
  ToastDemo,
  GridDemo,
  InputDemo,
  TabsDemo,
  CollapseDemo,
  PopoverDemo,
  PagerDemo,
  SwitchDemo,
  CarouselDemo,
  RadioDemo,
  CheckboxDemo,
  TableDemo,
  TreeDemo,
  SliderDemo,
  // TODO: ...
  ScrollExample,
  AutoCompleteExample
  // FormExample
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
  {
    path: "/grid",
    title: "Grid 栅格布局",
    component: GridDemo
  },
  {
    path: "/input",
    title: "Input 输入框",
    component: InputDemo
  },
  {
    path: "/tabs",
    title: "Tabs 标签",
    component: TabsDemo
  },
  {
    path: "/collapse",
    title: "Collapse 折叠面板",
    component: CollapseDemo
  },
  {
    path: "/popover",
    title: "Popover 气泡卡片",
    component: PopoverDemo
  },
  {
    path: "/pager",
    title: "Pager 分页",
    component: PagerDemo
  },
  {
    path: "/switch",
    title: "Switch 开关",
    component: SwitchDemo
  },
  {
    path: "/carousel",
    title: "Carousel 轮播",
    component: CarouselDemo
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

  // {
  //   path: "/form",
  //   title: "Form 表单",
  //   component: FormExample
  // },
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
    path: "/slider",
    title: "Slider 滑块",
    component: SliderDemo
  },

  {
    path: "/autoComplete",
    title: "AutoComplete 自动完成",
    component: AutoCompleteExample
  }
];
