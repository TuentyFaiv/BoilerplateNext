import { memo, useEffect, useRef } from "react";
import { withField } from "@hoc";

import type { MouseEvent } from "react";
import type { SelectFieldProps } from "@typing";

import { Input as Styles } from "@stylesComponents";

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
    <Styles.Select
      ref={selectRef}
      onClick={handleSelect}
      role="button"
      tabIndex={0}
    >
      <Styles.SelectValue>
        {value ?? validateValue}
      </Styles.SelectValue>
      <Styles.SelectOptions onMouseLeave={handleCloseSelect}>
        {options.map((option) => (
          <Styles.SelectOption
            key={option.key ?? option.value}
            data-value={option.value}
          >
            {option.label}
          </Styles.SelectOption>
        ))}
      </Styles.SelectOptions>
    </Styles.Select>
  );
};

export default withField<SelectFieldProps>(memo(SelectInput));
