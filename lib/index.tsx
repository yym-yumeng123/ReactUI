import React from "react";
import ReactDOM from "react-dom";
import Icon from "./Icon/icon";

const fn = (e: React.MouseEvent<SVGElement | SVGUseElement>) => {
  console.log('fn...')
  console.log(e)
  console.log((e.target as SVGUseElement).href)  // ? as 断言
}

ReactDOM.render(<Icon name="wechat" onClick={fn} />, document.body.querySelector('#root'));
