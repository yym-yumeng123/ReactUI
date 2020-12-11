import React from "react";
import Layout from "../../lib/Layout/layout";
import Header from "../../lib/Layout/header";
import Content from "../../lib/Layout/content";
import Footer from "../../lib/Layout/footer";
import SiderBar from "../../lib/Layout/sidebar";
import "./demo.scss";

export default function() {
  return (
    <div>
      <h2>第一个例子</h2>
      <Layout className="yym-demo-layout">
        <Header className="yym-demo-header">Header</Header>
        <Content className="yym-demo-content">Content</Content>
        <Footer className="yym-demo-footer">Footer</Footer>
      </Layout>
      {/*第二个例子:
      <Layout style={{height: "300px",}}>
        <Header>头部</Header>
        <Layout>
          <SiderBar>侧边</SiderBar>
          <Content>中间</Content>
        </Layout>
        <Footer>dibu </Footer>
      </Layout>
      第三个例子:
      <Layout style={{height: "300px",}}>
        <Header>头部</Header>
        <Layout>
          <Content>中间</Content>
          <SiderBar>侧边</SiderBar>
        </Layout>
        <Footer>dibu </Footer>
      </Layout> */}
      <h2>第四个例子</h2>
      <Layout>
        <SiderBar className="yym-demo-sider">SiderBar</SiderBar>
        <Layout className="yym-demo-layout">
          <Header className="yym-demo-header">Header</Header>
          <Content className="yym-demo-content">Content</Content>
          <Footer className="yym-demo-footer">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
