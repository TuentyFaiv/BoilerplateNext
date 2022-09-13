import { forwardRef } from "react";
import { withDatasets } from "@hoc";

import type { Ref } from "react";
import type { InputProps } from "@typing/proptypes";

import { Input as Styles } from "@stylesComponents";

const RadioInput = ({ children, name, checked, value, ...props }: Omit<InputProps, "data">, ref: Ref<HTMLLabelElement>) => (
  <Styles.Label
    ref={ref}
    htmlFor={props.id}
    data-checked={checked}
    data-payment={props.payment}
    onClick={props.onSelect}
    radio
    {...props.datas}
  >
    <Styles.Radio
      type="radio"
      id={props.id}
      name={name}
      value={value}
      disabled={props.datas["data-disabled"]}
    />
    <Styles.RadioError component="span" name={name} />
    <Styles.Text radio>
      {props.label}
      {children}
      {props.label2}
    </Styles.Text>
  </Styles.Label>
);

export default withDatasets<InputProps>(forwardRef(RadioInput));
