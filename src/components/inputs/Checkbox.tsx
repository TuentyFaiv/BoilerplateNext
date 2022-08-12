import { forwardRef } from "react";
import { withDatasets } from "@hoc";

import type { Ref } from "react";
import type { InputProps } from "@typing";

import { Input as Styles } from "@stylesComponents";

const CheckboxInput = ({ children, label, label2 = null, ...props }: Omit<InputProps, "data">, ref: Ref<HTMLLabelElement>) => (
  <Styles.Label
    ref={ref}
    htmlFor={props.id}
    data-checked={props.checked}
    onClick={props.onSelect}
    check
    {...props.datas}
  >
    {props.value ? (
      <Styles.Checkbox type="checkbox" value={props.value} id={props.id} name={props.name} />
    ) : (
      <Styles.Checkbox type="checkbox" id={props.id} name={props.name} />
    )}
    <Styles.CheckboxError component="span" name={props.name} />
    <Styles.Text check>
      {label}
      {children}
      {label2}
    </Styles.Text>
  </Styles.Label>
);
export default withDatasets<InputProps>(forwardRef(CheckboxInput));
