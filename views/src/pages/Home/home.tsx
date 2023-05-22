import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";
import Button from "lib/Button/button";

export default function Home() {
  return (
    <div className="v-home-wrap">
      <div className="v-home">
        <h1>YUI组件库</h1>
        <p>基于 React + TypeScript, 面向开发者的组件库</p>
      </div>
      <div className="v-home-link">
        <Link to={`/components`}>
          <Button level="primary">组件</Button>
        </Link>
      </div>
    </div>
  );
}
