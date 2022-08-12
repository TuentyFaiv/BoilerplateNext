import { appWithTranslation } from "next-i18next";
import next18nextConfig from "next-18next.config";
import { AppProvider, ServiceProvider } from "@context";

import type { AppProps } from "next/app";

import GlobalStyle from "@styles";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <ServiceProvider>
          <Component {...pageProps} />
        </ServiceProvider>
      </AppProvider>
    </>
  );
}

export default appWithTranslation(MyApp, next18nextConfig);
