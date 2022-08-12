import { withField } from "@hoc";

import type { AreaFieldProps } from "@typing";

import { Input as Styles } from "@stylesComponents";

const TextArea = ({ error, field, meta, helpers, ...props }: Omit<AreaFieldProps, "data" | "file">) => (
  <Styles.TextArea
    id={props.id || props.name}
    data-error={error}
    {...field}
    {...props}
  />
);

export default withField<AreaFieldProps>(TextArea);
