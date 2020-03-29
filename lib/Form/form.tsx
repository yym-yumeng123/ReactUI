import React, { ReactFragment } from "react";

export interface FormValue {
  [K: string]: any;
}

interface FormProps {
  value: FormValue;
  fields: Array<{ name: string; label: string | ""; input: { type: string } }>;
  buttons: ReactFragment;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  onChange: (value: FormValue) => void;
  errors: { [K: string]: string[] };
}

const Form: React.FunctionComponent<FormProps> = props => {
  const formData = props.value;
  const onSubmit: React.FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();
    props.onSubmit(e);
  };
  const onInputChange = (name: string, value: string) => {
    console.log(name, value);
    const newFormvalue = { ...formData, [name]: value };
    props.onChange(newFormvalue);
  };

  return (
    <form onSubmit={onSubmit}>
      {props.fields.map(f => (
        <div key={f.name}>
          {f.label}
          <input
            type={f.input.type}
            value={formData[f.name]}
            onChange={e => onInputChange(f.name, e.target.value)}
            // onChange={onInputChange.bind(null, f.name)}
          />
          <div>{props.errors[f.name]}</div>
        </div>
      ))}
      {props.buttons}
    </form>
  );
};

export default Form;
