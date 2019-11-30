import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Link } from "react-router-dom";
import ButtonExample from "./lib/button/button.example";
import IconExample from "./lib/Icon/icon.example";

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
          </ul>
        </aside>
        <main>
          <Route path="/icon" component={IconExample}></Route>
          <Route path="/button" component={ButtonExample}></Route>
        </main>
      </div>
    </div>
  </Router>,
  document.querySelector("#root")
);
