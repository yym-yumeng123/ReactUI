import React, { useState } from "react";
import Form from "./form";

const FormExample: React.FunctionComponent = () => {
  const [formData] = useState({
    username: "",
    password: ""
  });

  const [fields] = useState([
    {
      name: "username",
      label: "用户名",
      input: {
        type: "text"
      }
    },
    {
      name: "passsword",
      label: "密码",
      input: {
        type: "password"
      }
    }
  ]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
  };

  return (
    <Form
      value={formData}
      fields={fields}
      buttons={
        <>
          <button type="submit">提交</button>
          <button>返回</button>
        </>
      }
      onSubmit={handlerSubmit}
    />
  );
};

export default FormExample;
