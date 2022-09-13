import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import next18nextConfig from "next-18next.config";

import type { GetServerSidePropsContext, NextPage } from "next";

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => ({
  props: {
    ...await serverSideTranslations(
      locale ?? "en-US",
      next18nextConfig.ns,
      next18nextConfig
    )
  }
});

const Signin: NextPage = () => {
  const { t } = useTranslation("auth");
  return (
    <section>
      {t("signin-title")}
    </section>
  );
};

export default Signin;
