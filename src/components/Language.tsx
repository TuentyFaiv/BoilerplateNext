import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useModal } from "@hooks";

import type { LanguageProps } from "@typing/proptypes";

import { Language as Styles } from "@stylesComponents";

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
    <Styles.Container
      onClick={toggleModal}
      role="button"
      tabIndex={0}
      data-open={modal}
    >
      {lang}
      {modal && (
        <Styles.Options>
          {router.locales?.map((language) => (
            <Styles.Option
              key={language}
              type="button"
              onClick={() => handleChangeLanguage(language)}
            >
              {`${language}`.split("-")[0]}
            </Styles.Option>
          ))}
        </Styles.Options>
      )}
    </Styles.Container>
  );
}
