import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import ButtonExample from "./lib/Button/button.example";
import IconExample from "./lib/Icon/icon.example";
import DialogExample from "./lib/Dialog/dialog.example";
import LayoutExample from "./lib/Layout/layout.example";

ReactDOM.render(
  <Router>
    <div>
      <header>YUI</header>
      <div>
        <aside>
          <ul>
            <li>
              <Link to="/icon">icon</Link>
            </li>
            <li>
              <Link to="/button">按钮</Link>
            </li>
            <li>
              <Link to="/dialog">弹窗组件-Dialog</Link>
            </li>
            <li>
              <Link to="/layout">容器组件-Layout</Link>
            </li>
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/button" component={ButtonExample}></Route>
          <Route path="/dialog" component={DialogExample}></Route>
          <Route path="/layout" component={LayoutExample}></Route>
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root"),
);
