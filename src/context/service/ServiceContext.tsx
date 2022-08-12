import { createContext, useContext, useMemo } from "react";
import { useAppContext, Http } from "@context";

import type { ContextService, ContextServiceProvider } from "@typing";

const ServiceContext = createContext<ContextService>({
  api: null
});

export function ServiceProvider({ children }: ContextServiceProvider) {
  const { global: { sessionId, secret } } = useAppContext();

  const api = useMemo(() => (
    new Http(sessionId ?? "", secret ?? "")
  ), [sessionId, secret]);

  const value = useMemo(() => ({ api }), [api]);

  return (
    <ServiceContext.Provider value={value}>
      {children}
    </ServiceContext.Provider>
  );
}

export const useServiceContext = () => useContext(ServiceContext);
