import { forwardRef } from "react";
import { ErrorMessage, Field } from "formik";
import { withDatasets } from "@hoc";

import type { Ref } from "react";
import type { InputProps } from "@typing";

// import { Input as Styles } from "@stylesComponents";

const CheckboxInput = ({ children, label, label2 = null, ...props }: Omit<InputProps, "data">, ref: Ref<HTMLLabelElement>) => (
  <label
    ref={ref}
    htmlFor={props.id}
    data-checked={props.checked}
    onClick={props.onSelect}
    {...props.datas}
  >
    {props.value ? (
      <Field type="checkbox" value={props.value} id={props.id} name={props.name} />
    ) : (
      <Field type="checkbox" id={props.id} name={props.name} />
    )}
    <ErrorMessage component="span" name={props.name} />
    <p>
      {label}
      {children}
      {label2}
    </p>
  </label>
);
export default withDatasets<InputProps>(forwardRef(CheckboxInput));
