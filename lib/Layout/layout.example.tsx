import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";
import SiderBar from "./sidebar";

export default function() {
  return (
    <div>
      {/* 第一个例子:
      <Layout className="hi" style={{height: "300px",}}>
        <Header>王向芬-header</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
      第二个例子:
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
      第四个例子:
      <Layout style={{height: "300px",}}>
        <SiderBar>侧边</SiderBar>
        <Layout>
          <Header>头部</Header>
          <Content>中间</Content>
          <Footer>底部</Footer>
        </Layout>
      </Layout>
    </div>
  );
}
