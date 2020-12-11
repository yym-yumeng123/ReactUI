import React, { useState } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
interface Props {
  code: string;
}

/**
 * @description 代码高亮 demo
 */
const Demo: React.FunctionComponent<Props> = props => {
  const [codeVisible, setCodeVisible] = useState(false);
  const code = (
    <Highlight {...defaultProps} code={props.code} language="jsx">
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
      <div>{props.children}</div>
      <div>
        <button onClick={() => setCodeVisible(!codeVisible)}>查看代码</button>
        {codeVisible && code}
      </div>
    </div>
  );
};

export default Demo;
