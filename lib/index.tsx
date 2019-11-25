import React from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon/icon";

const fn: React.MouseEventHandler = (e) => {
  console.log('fn...')
  console.log(e.target)
}

ReactDOM.render(<Icon name="wechat" onClick={fn} />, document.body.querySelector('#root'));
