import { useState } from "react";
import { withField } from "@hoc";

import type { InputFieldProps } from "@typing/proptypes";

import { Input as Styles } from "@stylesComponents";

// import IconEye from "@icons/eye-icon.svg";
// import IconEyeClose from "@icons/eye-close-icon.svg";

const Input = ({ error, field, meta, helpers, type, ...props }: Omit<InputFieldProps, "data" | "file">) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Styles.Input
        id={props.id || props.name}
        data-error={error}
        type={(type === "password" && showPassword) ? "text" : type}
        {...field}
        {...props}
      />
      {type === "password" && (
        <Styles.Show
          type="button"
          onClick={() => setShowPassword(!showPassword)}
        >
          <Styles.ShowIcon
            // src={showPassword ? IconEye : IconEyeClose}
            src=""
            alt={showPassword ? "Show password" : "Hide password"}
          />
        </Styles.Show>
      )}
    </>
  );
};

export default withField<InputFieldProps>(Input);
