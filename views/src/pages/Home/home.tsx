import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Button from "lib/Button/button";
import { Card } from "lib";
import Row, { Col } from "lib/Grid/row";

export default function Home() {
  return (
    <div className="v-home-wrap">
      <header>
        <div className="v-home">
          <h1>YUI组件库</h1>
          <pre>基于 React, 面向开发者的组件库</pre>
        </div>
        <div className="v-home-link">
          <Link to={`/overview/icon`}>
            <Button level="primary">立即前往</Button>
          </Link>
        </div>
      </header>

      <div className="v-card">
        <Row gutter={20}>
          <Col span={8}>
            <Card title="组件丰富">
              <pre>完成 20+ 组件</pre>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="技术栈">
              <ul>
                <li>
                  <pre>React + Hooks</pre>
                </li>
                <li>
                  <pre>TypeScript</pre>
                </li>
                <li>
                  <pre>Webpack</pre>
                </li>
              </ul>
            </Card>
          </Col>
          <Col span={8}>
            <Card title="源码">
              <pre>代码简洁易懂</pre>
              <pre>尽量不引入外部库</pre>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
