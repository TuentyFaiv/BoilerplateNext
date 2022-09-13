import { useState } from "react";
import Image from "next/image";
import { withField } from "@hoc";

import type { InputFieldProps } from "@typing/proptypes";

import styles from "@stylesComponents/Input.module.scss";

// import IconEye from "@icons/eye-icon.svg";
// import IconEyeClose from "@icons/eye-close-icon.svg";

const Input = ({ error, field, meta, helpers, type, ...props }: Omit<InputFieldProps, "data" | "file">) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <input
        id={props.id || props.name}
        data-error={error}
        type={(type === "password" && showPassword) ? "text" : type}
        className={styles.field__input}
        {...field}
        {...props}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className={styles.field__show}
        >
          <Image
            // src={showPassword ? IconEye : IconEyeClose}
            src=""
            alt={showPassword ? "Show password" : "Hide password"}
          />
        </button>
      )}
    </>
  );
};

export default withField<InputFieldProps>(Input);
