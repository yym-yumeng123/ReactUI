import React from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon/icon";

const fn: React.MouseEventHandler = (e) => {
  console.log('fn...')
  console.log(e.target)
}

ReactDOM.render(<Icon className="111" name="wechat" onClick={fn} onMouseEnter={() => console.log('enter')} />, document.body.querySelector('#root'));
