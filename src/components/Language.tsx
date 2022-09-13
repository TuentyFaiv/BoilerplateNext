import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useModal } from "@hooks";

import type { LanguageProps } from "@typing/proptypes";

import styles from "@stylesComponents/Language.module.scss";

export default function Language({ onClose }: LanguageProps) {
  const router = useRouter();
  const { i18n } = useTranslation("common");
  const [modal, toggleModal] = useModal();
  const lang = `${i18n.language}`.split("-")[0];

  const handleChangeLanguage = (locale: string) => {
    i18n.changeLanguage(locale);
    router.push(router.pathname, router.pathname, { locale });
    if (onClose) onClose();
  };

  return (
    <span
      onClick={toggleModal}
      role="button"
      tabIndex={0}
      data-open={modal}
      className={styles.language}
    >
      {lang}
      {modal && (
        <span className={styles.language__options}>
          {router.locales?.map((language) => (
            <button
              key={language}
              type="button"
              onClick={() => handleChangeLanguage(language)}
              className={styles.language__option}
            >
              {`${language}`.split("-")[0]}
            </button>
          ))}
        </span>
      )}
    </span>
  );
}
