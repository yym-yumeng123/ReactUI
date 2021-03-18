import React from "react";
import ReactDOM from "react-dom";
import {
  HashRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";
import All from "lib/All/all";
import ButtonExample from "lib/Button/button.example";
import DialogExample from "lib/Dialog/dialog.example";
import FormExample from "lib/Form/form.example";
import { Layout, Footer, Header, SideBar, Content } from "lib/Layout/layout";
import {
  IconDemo,
  LayoutExample,
  TreeDemo,
  ScrollExample,
  InputExample,
  AutoCompleteExample,
  SwitchExample
} from "example";
import Scroll from "../lib/Scroll/scroll";

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
          </Content>
        </Scroll>
      </Layout>
      <Footer className="g-footer">&copy; 杨雨蒙</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);
