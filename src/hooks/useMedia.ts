import { useEffect, useState } from "react";

import type { HookMediaParameters, HookMediaReturn } from "@typing";

export default function useMedia(mediaQuery: HookMediaParameters = null): HookMediaReturn {
  const [device, setDevice] = useState(false);
  const media = typeof window !== "undefined" ? matchMedia(mediaQuery ?? "(min-width: 0px)") : null;

  useEffect(() => {
    const listener = (event: MediaQueryListEvent) => {
      setDevice(event.matches);
    };

    setDevice(media?.matches ?? false);

    media?.addEventListener("change", listener);
    return () => {
      media?.removeEventListener("change", listener);
    };
  }, [media]);

  return device;
}
