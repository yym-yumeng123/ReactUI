import React from "react";
import Scroll from "lib/Scroll/scroll";

const ScrollExample = () => {
  const onPull = () => {
    console.log("我知道了");
  };

  return (
    <div>
      <Scroll style={{height: "200px", width: "50%", border: "1px solid #59afff",}} onPull={onPull}>
        {
          Array.from({length: 100}, (v, k) => k).map(item => <p key={item}>{item}</p>)
        }
      </Scroll>
    </div>
  );
};

export default ScrollExample;
