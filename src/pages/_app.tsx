import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import next18nextConfig from "next-18next.config";
import { AppProvider, ServiceProvider } from "@context";

import type { AppProps } from "next/app";

import "@styles";

import { LoaderPage } from "@components";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const changeStart = () => {
      setLoading(true);
    };
    const changeComplete = () => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", changeStart);
    router.events.on("routeChangeComplete", changeComplete);

    return () => {
      router.events.off("routeChangeStart", changeStart);
      router.events.off("routeChangeComplete", changeComplete);
    };
  }, [router]);

  return (
    <>
      {loading ? <LoaderPage /> : null}
      <SessionProvider session={pageProps.session}>
        <AppProvider>
          <ServiceProvider>
            <Component {...pageProps} />
          </ServiceProvider>
        </AppProvider>
      </SessionProvider>
    </>
  );
}

export default appWithTranslation(MyApp, next18nextConfig);
