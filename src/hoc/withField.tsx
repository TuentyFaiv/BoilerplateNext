/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useField } from "formik";
import { useDatas } from "@hooks";

import type { ComponentType, Ref } from "react";
import type { FieldHookConfig } from "formik";
import type { HOCField, HOCFieldProps } from "@typing/hocs";

import { Input as Styles } from "@stylesComponents";

function withField<T extends HOCField = HOCField>(InputComponent: ComponentType<T>) {
  return forwardRef((props: Omit<T, keyof HOCField>, ref: Ref<HTMLLabelElement>) => {
    const { label, data = {}, ...newProps } = props as T & HOCFieldProps & FieldHookConfig<string>;
    const [field, meta, helpers] = useField(newProps);
    const datas = useDatas(data);
    const error = Boolean(meta.touched && meta.error);

    return (
      <Styles.Label
        ref={ref}
        htmlFor={newProps.id || newProps.name}
        data-error={error}
        data-error-msg={meta.error}
        data-readonly={newProps.readOnly}
        data-disabled={newProps.disabled}
        data-password={newProps.type === "password"}
        {...datas}
      >
        <InputComponent
          {...(newProps as T)}
          error={error}
          field={field}
          meta={meta}
          helpers={helpers}
          label={label}
        />
        <Styles.Text
          title={meta.error}
          data-error={error}
          data-error-msg={error ? ` | ${meta.error}` : null}
        >
          {label}
        </Styles.Text>
      </Styles.Label>
    );
  });
}

export default withField;
