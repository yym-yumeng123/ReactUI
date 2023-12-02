import React from "react";
import { createHashRouter } from "react-router-dom";

import Home from "views/src/pages/Home/home";
import Overview from "views/src/pages/Overview/overview";
import {
  ButtonDemo,
  IconDemo,
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
  RadioDemo,
  TableDemo,
  FormExample,
  ScrollDemo,
  SliderDemo,
  AutoCompleteDemo,
  DatePickerDemo,
  CarouselDemo,
  CheckboxDemo,
  TreeDemo,
  CitySelectDemo,
  NavDemo
} from "views/src/example";

const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>错误路由进入页</div>,
  },
  {
    path: "/overview",
    element: <Overview />,
    children: [
      {
        path: "icon",
        element: <IconDemo />,
        index: true,
      },
      {
        path: "button",
        element: <ButtonDemo />,
      },
      {
        path: "card",
        element: <CardDemo />,
      },
      {
        path: "dialog",
        element: <DialogDemo />,
      },
      {
        path: "layout",
        element: <LayoutDemo />,
      },
      {
        path: "toast",
        element: <ToastDemo />,
      },
      {
        path: "grid",
        element: <GridDemo />,
      },
      {
        path: "input",
        element: <InputDemo />,
      },
      {
        path: "tabs",
        element: <TabsDemo />,
      },
      {
        path: "collapse",
        element: <CollapseDemo />,
      },
      {
        path: "popover",
        element: <PopoverDemo />,
      },
      {
        path: "pager",
        element: <PagerDemo />,
      },
      {
        path: "switch",
        element: <SwitchDemo />,
      },
      {
        path: "radio",
        element: <RadioDemo />,
      },
      {
        path: "checkbox",
        element: <CheckboxDemo />,
      },
      {
        path: "table",
        element: <TableDemo />,
      },
      {
        path: "form",
        element: <FormExample />,
      },
      {
        path: "tree",
        element: <TreeDemo />,
      },
      {
        path: "city",
        element: <CitySelectDemo />,
      },
      {
        path: "nav",
        element: <NavDemo />,
      },
      {
        path: "scroll",
        element: <ScrollDemo />,
      },
      {
        path: "slider",
        element: <SliderDemo />,
      },
      {
        path: "autoComplete",
        element: <AutoCompleteDemo />,
      },
      {
        path: "date",
        element: <DatePickerDemo />,
      },
      {
        path: "carousel",
        element: <CarouselDemo />,
      },
    ],
  },
]);

export default router;
