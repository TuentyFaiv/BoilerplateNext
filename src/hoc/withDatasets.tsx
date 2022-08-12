/* eslint-disable react/display-name */
import { forwardRef } from "react";
import { useDatas } from "@hooks";

import type { ComponentType } from "react";
import type { HOCDatasets, HOCDatasetsProps } from "@typing";

function withDatasets<T extends HOCDatasets = HOCDatasets>(Component: ComponentType<T>) {
  return forwardRef((props: Omit<T, keyof HOCDatasets>, ref) => {
    const { data = {}, ...newProps } = props as T & HOCDatasetsProps;
    const datas = useDatas(data);

    return (
      <Component
        {...(newProps as unknown as T)}
        ref={ref}
        datas={datas}
      />
    );
  });
}

export default withDatasets;
