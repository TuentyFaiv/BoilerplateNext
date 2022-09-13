import { createContext, useContext, useMemo } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { Http } from "@context";

import type { ContextService, ContextServiceProvider } from "@typing/contexts";

const ServiceContext = createContext<ContextService>({
  api: null,
  loading: false,
  auth: false
});

export function ServiceProvider({ children }: ContextServiceProvider) {
  const { push, pathname } = useRouter();
  const { data, status } = useSession({
    required: true,
    onUnauthenticated() {
      if (pathname !== "/auth/signin") {
        push("/auth/signin");
      }
    }
  });
  const loading = status === "loading";
  const auth = status === "authenticated";

  const api = useMemo(() => (
    new Http(data?.user?.name ?? "")
  ), [data?.user?.name]);

  const value = useMemo(() => ({
    api,
    loading,
    auth
  }), [api, loading, auth]);

  return (
    <ServiceContext.Provider value={value}>
      {children}
    </ServiceContext.Provider>
  );
}

export const useServiceContext = () => useContext(ServiceContext);
