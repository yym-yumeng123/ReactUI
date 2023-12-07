import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import Button from "lib/Button/button";
import { Layout, Header, Footer, Content, SideBar } from "lib/Layout/layout";
import { routeList } from "views/src/routes/config";
import ErrorPage from "../Error/Error";

import ErrorBoundary from "../../components/error.jsx";

import "./overview.scss";
import logo from "../../assets/image/logo.png";

const Overview = () => {
  return (
    <ErrorBoundary fallback={<ErrorPage />}>
      <Layout className="pageWrapper">
        <Header className="g-header">
          <img src={logo} alt="logo" />
          <div className="g-header-right">
            <Button
              className="link"
              level="link"
              href="https://github.com/yym-yumeng123/ReactUI"
            >
              GitHub
            </Button>
          </div>
        </Header>
        <Layout>
          <SideBar className="g-aside">
            <h2>组件</h2>
            <ul>
              {routeList.map((item, index) => {
                return (
                  <li key={String(index)}>
                    <NavLink to={`/overview${item.path}`}>{item.title}</NavLink>
                  </li>
                );
              })}
              <li></li>
            </ul>
          </SideBar>
          <Content className="g-main">
            <Outlet />
          </Content>
        </Layout>
        <Footer className="g-footer">&copy; 杨雨蒙</Footer>
      </Layout>
    </ErrorBoundary>
  );
};

export default Overview;
