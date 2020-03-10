import React, { useState } from "react";
import Form, { FormValue } from "./form";

const FormExample: React.FunctionComponent = () => {
  const [formData, setFromData] = useState<FormValue>({
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
      name: "password",
      label: "密码",
      input: {
        type: "password"
      }
    }
  ]);

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData, "form...");
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
      onChange={(newValue) => setFromData(newValue)}
      onSubmit={handlerSubmit}
    />
  );
};

export default FormExample;
