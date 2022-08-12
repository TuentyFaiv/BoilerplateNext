import Image from "next/image";
import { useTranslation } from "next-i18next";

import { Footer as Styles } from "@stylesComponents";

export default function Footer() {
  const { t } = useTranslation("footer");

  return (
    <Styles.Container>
      <Styles.Link
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t("powered")}
        <Styles.Logo>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Styles.Logo>
      </Styles.Link>
    </Styles.Container>
  );
}
