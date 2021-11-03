import React from "react";
import ReactDOM from "react-dom";
import "./toast.scss";

import addPrefixAndMergeClass from "lib/Helpers/addPrefixAndMergeClass";
const mergeClass = addPrefixAndMergeClass('yui-toast')

interface Options {
  content: string;
  type?: "success" | "danger" | "info";

}

const toast = (options: Options) => {
  const { content } = options;
  const component = <div className={mergeClass('')}>{content}</div>;

  const div = document.createElement("div");
  document.body.appendChild(div);
  ReactDOM.render(component, div);

  setTimeout(() => {
    ReactDOM.render(React.cloneElement(component), div);
    ReactDOM.unmountComponentAtNode(div);
    div.remove();
  }, 3000)
};

export default toast;
