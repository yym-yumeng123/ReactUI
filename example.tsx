import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import IconDemo from "./lib/Icon/icon.demo";
import DialogExample from "./lib/Dialog/dialog.example";
import LayoutExample from "./lib/Layout/layout.example";
import FormExample from "./lib/Form/form.example";
import {Layout, Footer, Header, SideBar, Content } from "./lib/Layout/layout";
import "./example.scss";

ReactDOM.render(
  <Router>
    <Layout className="pageWrapper">
      <Header className="g-header">
        <img src="./logo.png" alt="logo"/>
      </Header>
      <Layout>
        <SideBar className="g-aside">
          <h2>组件</h2>
          <ul>
            <li>
              <NavLink to="/icon">icon</NavLink>
            </li>
            {/* <li>
              <NavLink to="/button">按钮</NavLink>
            </li> */}
            <li>
              <NavLink to="/dialog">弹窗组件-Dialog</NavLink>
            </li>
            <li>
              <NavLink to="/layout">容器组件-Layout</NavLink>
            </li>
            <li>
              <NavLink to="/form">表单组件-Form</NavLink>
            </li>
          </ul>
        </SideBar>
        <Content className="g-main">
          <Route path="/icon" component={IconDemo}></Route>
          {/* <Route path="/button" component={ButtonExample}></Route> */}
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
          <Route path="/form" component={FormExample}></Route>
        </Content>
      </Layout>
      <Footer className="g-footer">&copy; 杨雨蒙</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root"),
);
