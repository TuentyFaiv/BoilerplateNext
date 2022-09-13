import Image from "next/image";
import { useTranslation } from "next-i18next";

import styles from "@stylesComponents/Footer.module.scss";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <footer className={styles.footer}>
      <a
        className={styles.footer__link}
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("powered")}
        <div className={styles.footer__logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </div>
      </a>
    </footer>
  );
}
