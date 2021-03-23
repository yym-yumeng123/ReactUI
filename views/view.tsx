import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import All from "lib/All/all";
import {
  IconDemo,
  LayoutExample,
  TreeDemo,
  ScrollExample,
  InputExample,
  AutoCompleteExample,
  SwitchExample,
  ButtonExample,
  DialogExample,
  FormExample,
  TabsExample,
  GridExample,
  PopoverExample
} from "example";

import { Layout, Footer, Header, SideBar, Content } from "lib/Layout/layout";
import Scroll from "lib/Scroll/scroll";
import "./view.scss";
// @ts-ignore
import logo from "./logo.png";

ReactDOM.render(
  <Router>
    <Layout className="pageWrapper">
      <Header className="g-header">
        <img src={logo} alt="logo" />
      </Header>
      <Layout>
        <SideBar className="g-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/all">组件总览</NavLink>
            </li>
            <li>
              <NavLink to="/icon">Icon 图标</NavLink>
            </li>
            <li>
              <NavLink to="/button">Button 按钮</NavLink>
            </li>
            <li>
              <NavLink to="/dialog">Dialog 弹窗</NavLink>
            </li>
            <li>
              <NavLink to="/layout">Layout 布局容器</NavLink>
            </li>
            <li>
              <NavLink to="/form">Form 表单</NavLink>
            </li>
            <li>
              <NavLink to="/tree">Tree 树</NavLink>
            </li>
            <li>
              <NavLink to="/scroll">Scroll 滚动</NavLink>
            </li>
            <li>
              <NavLink to="/input">Input 输入框</NavLink>
            </li>
            <li>
              <NavLink to="/autoComplete">AutoComplete 自动完成</NavLink>
            </li>
            <li>
              <NavLink to="/switch">Switch 开关</NavLink>
            </li>
            <li>
              <NavLink to="/tabs">Tabs 标签</NavLink>
            </li>
            <li>
              <NavLink to="/grid">Grid 栅格布局</NavLink>
            </li>
            <li>
              <NavLink to="/popover">Popover 气泡卡片</NavLink>
            </li>
          </ul>
        </SideBar>
        <Scroll style={{ height: "calc(100vh - 121px)", width: "100%" }}>
          <Content className="g-main">
            <Route path="/all" component={All} exact></Route>
            <Route path="/icon" component={IconDemo}></Route>
            <Route path="/button" component={ButtonExample}></Route>
            <Route path="/dialog" component={DialogExample}></Route>
            <Route path="/layout" component={LayoutExample}></Route>
            <Route path="/form" component={FormExample}></Route>
            <Route path="/tree" component={TreeDemo}></Route>
            <Route path="/scroll" component={ScrollExample}></Route>
            <Route path="/input" component={InputExample}></Route>
            <Route path="/autoComplete" component={AutoCompleteExample}></Route>
            <Route path="/switch" component={SwitchExample}></Route>
            <Route path="/tabs" component={TabsExample}></Route>
            <Route path="/grid" component={GridExample}></Route>
            <Route path="/popover" component={PopoverExample}></Route>
          </Content>
        </Scroll>
      </Layout>
      <Footer className="g-footer">&copy; 杨雨蒙</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);
