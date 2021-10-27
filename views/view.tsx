import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
import { routeList } from "./config";

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
            {routeList.map((item,index) => {
              return (
                <li key={String(index)}>
                  <NavLink to={item.path}>{item.title}</NavLink>
                </li>
              );
            })}
          </ul>
        </SideBar>
        <Scroll style={{ height: "calc(100vh - 121px)", width: "100%" }}>
          <Content className="g-main">
            {routeList.map((item, index) => {
              return (
                <Route
                  key={index}
                  path={item.path}
                  component={item.component}
                  exact
                ></Route>
              );
            })}
          </Content>
        </Scroll>
      </Layout>
      <Footer className="g-footer">&copy; 杨雨蒙</Footer>
    </Layout>
  </Router>,
  document.querySelector("#root")
);
