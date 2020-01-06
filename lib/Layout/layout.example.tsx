import React from "react";
import Layout from "./layout";
import Header from "./header";
import Content from "./content";
import Footer from "./footer";

export default function() {
  return (
    <div>
      第一个例子:
      <Layout>
        <Header>header11</Header>
        <Content>content</Content>
        <Footer>footer</Footer>
      </Layout>
    </div>
  );
}
