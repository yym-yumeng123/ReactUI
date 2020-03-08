import React, { ReactFragment } from "react";

interface FormProps {
  value: { [K: string]: any };
  fields: Array<{ name: string; label: string | ""; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Form: React.FunctionComponent<FormProps> = props => {
  console.log(props, "props...");
  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    props.onSubmit(e);
    console.log("1212");
  };
  return (
    <form onSubmit={onSubmit}>
      {props.fields.map(f => (
        <div key={f.name}>
          {f.label}
          <input type={f.input.type} />
        </div>
      ))}
      {props.buttons}
    </form>
  );
};

export default Form;
