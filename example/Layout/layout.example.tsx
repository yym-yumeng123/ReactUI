import React from "react";
import Layout from "lib/Layout/layout";
import Header from "lib/Layout/header";
import Content from "lib/Layout/content";
import Footer from "lib/Layout/footer";
import SiderBar from "lib/Layout/sidebar";
import "./demo.scss";

const LayoutExample = () => {
  return (
    <div>
      <h3>上中下布局</h3>
      <Layout className="yym-demo-layout">
        <Header className="yym-demo-header">Header</Header>
        <Content className="yym-demo-content">Content</Content>
        <Footer className="yym-demo-footer">Footer</Footer>
      </Layout>

      <h3>上中(侧边栏、中间)布局</h3>
      <Layout className="yym-demo-layout">
        <Header className="yym-demo-header">头部</Header>
        <Layout>
          <SiderBar className="yym-demo-sider">侧边</SiderBar>
          <Content className="yym-demo-content">中间</Content>
        </Layout>
        <Footer>底部</Footer>
      </Layout>

      <h3>上中(中间、侧边栏)下布局</h3>
      <Layout className="yym-demo-layout">
        <Header className="yym-demo-header">头部</Header>
        <Layout>
          <Content className="yym-demo-content">中间</Content>
          <SiderBar className="yym-demo-sider">侧边</SiderBar>
        </Layout>
        <Footer className="yym-demo-footer">底部</Footer>
      </Layout>

      <h3>左右(上中下)布局</h3>
      <Layout className="yym-demo-layout">
        <SiderBar className="yym-demo-sider">SiderBar</SiderBar>
        <Layout className="yym-demo-layout">
          <Header className="yym-demo-header">Header</Header>
          <Content className="yym-demo-content">Content</Content>
          <Footer className="yym-demo-footer">Footer</Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutExample;
