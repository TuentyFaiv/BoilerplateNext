import { useTranslation } from "next-i18next";

import { Header as Styles } from "@stylesComponents";

export default function Header() {
  const { t } = useTranslation("header");

  return (
    <Styles.Container>
      <Styles.Title>
        {t("welcome")}
        <Styles.TitleLink href="https://nextjs.org">Next.js!</Styles.TitleLink>
      </Styles.Title>
      <Styles.Description>
        {t("get-started")}
        <Styles.Code>pages/index.js</Styles.Code>
      </Styles.Description>
    </Styles.Container>
  );
}
