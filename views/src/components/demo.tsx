import React, { FC, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import Button from "lib/Button/button";
import { Icon } from "lib";

interface Props {
  code: string;
  buttonVisible?: boolean;
  children?: any;
  showCode?: boolean;
}

const style = {
  width: "100%",
  overflow: "auto",
  fontSize: "14px",
};

/**
 * @description 代码高亮 demo
 */
const Demo: FC<Props> = (props: any) => {
  const { buttonVisible = true, showCode = false } = props;
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight code={props.code} theme={themes.vsDark} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className}
          style={{
            overflow: "auto",
            fontSize: "14px",
            width: "100%",
            backgroundColor: "rgb(30, 30, 30)",
          }}
          // style={style}
        >
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
  return (
    <div>
      <div className="content-style">{props.children}</div>
      {showCode
        ? code
        : buttonVisible && (
            <div className="code-style" style={style}>
              <Button
                level="primary"
                onClick={() => setCodeVisible(!codeVisible)}
              >
                查看代码{" "}
                <Icon
                  name="down_to_bottom"
                  style={{ marginLeft: "4px", fill: "#fff" }}
                />
              </Button>
              {codeVisible && code}
            </div>
          )}
    </div>
  );
};

export default Demo;
