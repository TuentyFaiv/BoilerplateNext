import { withField } from "@hoc";

import type { AreaFieldProps } from "@typing/proptypes";

import styles from "@stylesComponents/Input.module.scss";

const TextArea = ({ error, field, meta, helpers, ...props }: Omit<AreaFieldProps, "data" | "file">) => (
  <textarea
    id={props.id || props.name}
    data-error={error}
    className={styles.field__textarea}
    {...field}
    {...props}
  />
);

export default withField<AreaFieldProps>(TextArea);
