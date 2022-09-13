import { useTranslation } from "next-i18next";

import styles from "@stylesComponents/Header.module.scss";

export default function Header() {
  const { t } = useTranslation("header");

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        {t("welcome")}
        <a className={styles.header__titlelink} href="https://nextjs.org">Next.js!</a>
      </h1>
      <p className={styles.header__description}>
        {t("get-started")}
        <code className={styles.header__code}>pages/index.js</code>
      </p>
    </header>
  );
}
