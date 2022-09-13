import { memo, useEffect, useRef } from "react";
import { withField } from "@hoc";

import type { MouseEvent } from "react";
import type { SelectFieldProps } from "@typing/proptypes";

import styles from "@stylesComponents/Input.module.scss";

const SelectInput = ({ error, field, meta, helpers, ...props }: Omit<SelectFieldProps, "data">) => {
  const { options = [], value = null, onSelect, ...remainingProps } = props;
  const selectRef = useRef<HTMLDivElement | null>(null);
  const validateValue = options.find(({ value: valueOption }) => (
    valueOption === meta.value
  ))?.label || remainingProps.withoutValue;

  const handleCloseSelect = () => {
    const select = selectRef.current;
    if (select) {
      if (select.dataset.active) {
        delete select.dataset.active;
      } else {
        select.dataset.active = "true";
      }
    }
  };

  const handleSelect = (event: MouseEvent) => {
    const option = event.target as HTMLDivElement;
    const select = selectRef.current;
    if (select) {
      if (!option.classList.contains("input__select")) {
        const valueSelected = option.dataset.value;
        if (onSelect) onSelect(valueSelected);
        helpers.setValue(valueSelected);
        select.dataset.active = "false";
      } else {
        handleCloseSelect();
        select.lastElementChild?.scrollTo(0, 0);
      }
    }
  };

  useEffect(() => {
    if (options.length === 1 && field.value !== options[0].value) {
      helpers.setValue(options[0].value);
      if (onSelect) onSelect(options[0].value);
    }
  }, [options, field, helpers, onSelect]);

  return (
    <div
      ref={selectRef}
      onClick={handleSelect}
      role="button"
      tabIndex={0}
      className={styles.field__select}
    >
      <p className={styles.field__selectvalue}>
        {value ?? validateValue}
      </p>
      <div className={styles.field__selectoptions} onMouseLeave={handleCloseSelect}>
        {options.map((option) => (
          <span
            key={option.key ?? option.value}
            data-value={option.value}
            className={styles.field__select}
          >
            {option.label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default withField<SelectFieldProps>(memo(SelectInput));
