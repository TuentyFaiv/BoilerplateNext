import Image from "next/image";
import { withField } from "@hoc";

import type { ChangeEvent } from "react";
import type { FileFieldProps } from "@typing/proptypes";

import styles from "@stylesComponents/Input.module.scss";

const FileInput = ({ error, field, meta, helpers, ...props }: Omit<FileFieldProps, "data" | "file">) => {
  const { profile, defaultValue, alt, accept = "image/*", onChange, ...remainingProps } = props;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { onChange: onChangeField, onBlur, value } = field;
  const handleSelectFile = (event: ChangeEvent) => {
    const { files } = event.target as HTMLInputElement;
    if (files) {
      const filesSelected = props.multiple ? [...value, ...files] as File[] : files[0];
      if (onChange) onChange(filesSelected);
      helpers.setValue(filesSelected);
    }
  };

  if (profile) {
    return (
      <div className={styles.field__profile}>
        <div className={styles.field__profileimage}>
          <Image
            src={value ? URL.createObjectURL(value) : defaultValue ?? ""}
            alt={value?.name || alt}
          />
        </div>
        <input
          className={styles.field__file}
          id={props.id || props.name}
          data-error={error}
          type="file"
          accept={accept}
          onChange={handleSelectFile}
          onBlur={onBlur}
          {...remainingProps}
        />
      </div>
    );
  }

  return (
    <input
      className={styles.field__file}
      id={props.id || props.name}
      data-error={error}
      type="file"
      accept={accept}
      onChange={handleSelectFile}
      onBlur={onBlur}
      {...remainingProps}
    />
  );
};

export default withField<FileFieldProps>(FileInput);
