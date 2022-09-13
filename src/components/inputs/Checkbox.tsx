import { forwardRef } from "react";
import { ErrorMessage, Field } from "formik";
import { withDatasets } from "@hoc";

import type { Ref } from "react";
import type { InputProps } from "@typing/proptypes";

import styles from "@stylesComponents/Input.module.scss";

const CheckboxInput = ({ children, label, label2 = null, ...props }: Omit<InputProps, "data">, ref: Ref<HTMLLabelElement>) => (
  <label
    ref={ref}
    htmlFor={props.id}
    data-checked={props.checked}
    onClick={props.onSelect}
    className={styles.field}
    {...props.datas}
  >
    {props.value ? (
      <Field type="checkbox" value={props.value} id={props.id} name={props.name} className={styles.field__checkbox} />
    ) : (
      <Field type="checkbox" id={props.id} name={props.name} className={styles.field__checkbox} />
    )}
    <ErrorMessage component="span" name={props.name} className={styles.field__checkboxerror} />
    <p className={styles.field__text}>
      {label}
      {children}
      {label2}
    </p>
  </label>
);
export default withDatasets<InputProps>(forwardRef(CheckboxInput));
