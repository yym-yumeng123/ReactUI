import { FormValue } from "./form";

interface FormRule {
  key: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

type FormRules = FormRule[];

interface FormErrors {
  [K: string]: string[];
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required) {
      if (value === undefined || value === null || value === "") {
        errors[rule.key] = ["不能为空"];
      }
    }
    console.log(rule, "rule...");
  });
  return errors;
};

export default Validator;
