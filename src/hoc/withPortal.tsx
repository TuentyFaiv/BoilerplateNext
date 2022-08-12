/* eslint-disable react/display-name */
import { forwardRef, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import type { ComponentType, Ref } from "react";

function withPortal<T>(Component: ComponentType<T>, selector: string) {
  const Portal = (props: T, ref: Ref<HTMLElement>) => {
    const rootRef = useRef<HTMLDivElement | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
      const root = document.querySelector(selector);
      if (!root) throw new Error(`Could not find element with selector: ${selector}`);

      rootRef.current = root as HTMLDivElement;
      setMounted(true);
    }, []);

    return (mounted && rootRef.current) ? createPortal(
      <Component
        ref={ref}
        {...props}
      />,
      rootRef.current
    ) : null;
  };

  Portal.displayName = `withPortal(${Component.displayName || Component.name})`;

  return forwardRef(Portal);
}

export default withPortal;
