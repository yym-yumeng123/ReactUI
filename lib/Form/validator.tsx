import { FormValue } from "./form";

interface FormRule {
  key: string;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: RegExp;
}

type FormRules = FormRule[];

interface FormErrors {
  [K: string]: string[];
}

function isEmpty(value: any) {
  return value === undefined || value === null || value === "";
}

const Validator = (formValue: FormValue, rules: FormRules): FormErrors => {
  let errors: any = {};
  const addError = (key: string, message: string) => {
    if (errors[key] === undefined) {
      errors[key] = [];
    }
    errors[key].push(message);
  };

  rules.map(rule => {
    const value = formValue[rule.key];
    if (rule.required) {
      if (isEmpty(value)) {
        addError(rule.key, "必填");
      }
    }
    if (rule.minLength) {
      if (!isEmpty(value) && value.length < rule.minLength) {
        addError(rule.key, "长度太短了");
      }
    }
    if (rule.maxLength) {
      if (!isEmpty(value) && value.length > rule.maxLength) {
        addError(rule.key, "长度太常了");
      }
    }
    if (rule.pattern) {
      if (!rule.pattern.test(value)) {
        addError(rule.key, "格式不合法");
      }
    }
    console.log(rule, "rule...");
  });
  return errors;
};

export default Validator;
