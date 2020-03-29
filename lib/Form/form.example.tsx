import React, { useState } from "react";
import Form, { FormValue } from "./form";
import Validator from "./validator";

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

  const [errors, setErrors] = useState({});

  const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      { key: "username", required: true },
      { key: "username", minLength: 3 },
      { key: "username", maxLength: 10 },
      { key: "username", pattern: /a-z/ },
      { key: "password", required: true },
    ];
    const errors = Validator(formData, rules);
    setErrors(errors);
    console.log(errors, "form...");
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
      errors={errors}
      onChange={newValue => setFromData(newValue)}
      onSubmit={handlerSubmit}
    />
  );
};

export default FormExample;
