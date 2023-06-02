import React, { FC, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import Button from "../Button/button";

interface Props {
  code: string;
  buttonVisible?: boolean;
  children: any;
}

const style = {
  width: "100%",
  overflow: "auto",
};

/**
 * @description 代码高亮 demo
 */
const Demo: FC<Props> = (props: any) => {
  const { buttonVisible = true } = props;
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight code={props.code} theme={themes.vsDark} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
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
      {buttonVisible && (
        <div className="code-style" style={style}>
          <Button level="primary" onClick={() => setCodeVisible(!codeVisible)}>
            查看代码
          </Button>
          {codeVisible && code}
        </div>
      )}
    </div>
  );
};

export default Demo;
