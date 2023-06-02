import All from "lib/All/all";
import {
  IconDemo,
  ButtonDemo,
  CardDemo,
  NavDemo,
  DialogDemo,
  LayoutDemo,
  ToastDemo,
  GridDemo,
  InputDemo,
  DatePickerDemo,
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
  ScrollExample,
  AutoCompleteExample

  // FormExample
} from "../example";

export const routeList: Array<{
  path: string;
  title: string;
  element: any;
}> = [
  {
    path: "/all",
    title: "组件总览",
    element: All
  },
  {
    path: "/icon",
    title: "Icon 图标",
    element: IconDemo
  },
  {
    path: "/button",
    title: "Button 按钮",
    element: ButtonDemo
  },
  {
    path: "/card",
    title: "Card 卡片",
    element: CardDemo
  },
  {
    path: "/nav",
    title: "Nav 导航",
    element: NavDemo
  },
  {
    path: "/dialog",
    title: "Dialog 弹窗",
    element: DialogDemo
  },
  {
    path: "/layout",
    title: "Layout 布局容器",
    element: LayoutDemo
  },
  {
    path: "/toast",
    title: "Toast 全局提示",
    element: ToastDemo
  },
  {
    path: "/grid",
    title: "Grid 栅格布局",
    element: GridDemo
  },
  {
    path: "/input",
    title: "Input 输入框",
    element: InputDemo
  },
  {
    path: "/date",
    title: "DatePicker 日期",
    element: DatePickerDemo
  },
  {
    path: "/tabs",
    title: "Tabs 标签",
    element: TabsDemo
  },
  {
    path: "/collapse",
    title: "Collapse 折叠面板",
    element: CollapseDemo
  },
  {
    path: "/popover",
    title: "Popover 气泡卡片",
    element: PopoverDemo
  },
  {
    path: "/pager",
    title: "Pager 分页",
    element: PagerDemo
  },
  {
    path: "/switch",
    title: "Switch 开关",
    element: SwitchDemo
  },
  {
    path: "/carousel",
    title: "Carousel 轮播",
    element: CarouselDemo
  },
  {
    path: "/radio",
    title: "Radio 单选框",
    element: RadioDemo
  },
  {
    path: "/checkbox",
    title: "CheckBox 多选框",
    element: CheckboxDemo
  },
  {
    path: "/table",
    title: "Table 表格",
    element: TableDemo
  },

  // {
  //   path: "/form",
  //   title: "Form 表单",
  //   component: FormExample
  // },
  {
    path: "/tree",
    title: "Tree 树",
    element: TreeDemo
  },
  {
    path: "/scroll",
    title: "Scroll 滚动",
    element: ScrollExample
  },
  {
    path: "/slider",
    title: "Slider 滑块",
    element: SliderDemo
  },

  {
    path: "/autoComplete",
    title: "AutoComplete 自动完成",
    element: AutoCompleteExample
  }
];
