import { createContext, useContext, useReducer, useMemo } from "react";

import type { ContextApp, ContextAppProvider, ContextAppState } from "@typing";

import reducer from "./reducer";

const AppContext = createContext<ContextApp>({
  global: {
    sessionId: null,
    secret: null,
    user: {},
    onboarding: null
  },
  dispatch: () => {}
});

export function AppProvider({ children }: ContextAppProvider) {
  const windowValidation = typeof window !== "undefined";
  const storageSession = windowValidation ? localStorage.getItem("sessionId") : null;
  const storageSecret = windowValidation ? localStorage.getItem("secret") : null;
  const storageUser = windowValidation ? localStorage.getItem("user") : null;

  const initialState: ContextAppState = {
    sessionId: storageSession || null,
    secret: storageSecret || null,
    user: storageUser ? JSON.parse(storageUser) : {},
    onboarding: null
  };

  const [global, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => ({
    global, dispatch
  }), [global]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
