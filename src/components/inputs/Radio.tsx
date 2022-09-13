import { forwardRef } from "react";
import { ErrorMessage, Field } from "formik";
import { withDatasets } from "@hoc";

import type { Ref } from "react";
import type { InputProps } from "@typing/proptypes";

import styles from "@stylesComponents/Input.module.scss";

const RadioInput = ({ children, name, checked, value, ...props }: Omit<InputProps, "data">, ref: Ref<HTMLLabelElement>) => (
  <label
    ref={ref}
    htmlFor={props.id}
    data-checked={checked}
    data-payment={props.payment}
    onClick={props.onSelect}
    className={styles.field}
    {...props.datas}
  >
    <Field
      type="radio"
      id={props.id}
      name={name}
      value={value}
      disabled={props.datas["data-disabled"]}
      className={styles.field__radio}
    />
    <ErrorMessage component="span" name={name} className={styles.field__radioerror} />
    <p className={styles.field__text}>
      {props.label}
      {children}
      {props.label2}
    </p>
  </label>
);

export default withDatasets<InputProps>(forwardRef(RadioInput));
