'use client';

import { useServerInsertedHTML } from "next/navigation";
import { useStyledComponentsRegistry } from "app/hooks";

import type { ChildrenProp } from "@typing/proptypes";

export default function StyleRegistry({ children }: ChildrenProp) {
  const [Registry, flushEffect] = useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{flushEffect()}</> 
  });

  return <Registry>{children}</Registry>;
}
