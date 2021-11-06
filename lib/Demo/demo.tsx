import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/shadesOfPurple";
import Button from "../Button/button";
interface Props {
  code: string;
  buttonVisible?: boolean;
}

const style = {
  width: '100%',
  overflow: 'auto'
}

/**
 * @description 代码高亮 demo
 */
const Demo: React.FunctionComponent<Props> = props => {
  const { buttonVisible = true } = props;
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight {...defaultProps} code={props.code} theme={theme} language="jsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            // tslint:disable-next-line: jsx-key
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                // tslint:disable-next-line: jsx-key
                <span {...getTokenProps({ token, key })} />
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
