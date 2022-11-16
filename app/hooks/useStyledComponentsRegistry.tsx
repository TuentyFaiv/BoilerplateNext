import { useState } from "react";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

import type { ReactElement } from "react";
import type { ChildrenProp } from "@typing/proptypes";

export default function useStyledComponentsRegistry() {
  const [styleSheet] = useState(() => new ServerStyleSheet());

  const flushEffect = () => {
    const styles = styleSheet.getStyleElement();
    styleSheet.instance.clearTag();

    return <>{styles}</>;
  };

  const Registry = ({ children }: ChildrenProp) => (
    <StyleSheetManager sheet={styleSheet.instance}>
      {children as ReactElement}
    </StyleSheetManager>
  );

  return [Registry, flushEffect] as const;
}
