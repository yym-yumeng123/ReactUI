import React from "react";

const ErrorPage = () => {
  const style = {
    width: "100%",
    height: "100vh",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "30px"
  };
  return (
    <div style={style}>
      <p>代码出现问题了, 马上就好</p>
    </div>
  );
};

export default ErrorPage;
