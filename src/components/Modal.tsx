// import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "next-i18next";
import { withPortal } from "@hoc";
import { useDatas } from "@hooks";

import type { MouseEvent } from "react";
import type { ModalProps } from "@typing/proptypes";

import styles from "@stylesComponents/Modal.module.scss";

// import Logo from "@icons/logo.svg";
// import IconClose from "@icons/icon-close.svg";

const DEFAULT_CONFIG = {
  small: false,
  white: false,
  center: false,
  close: false,
  scroll: false,
  header: true
};

function Modal({ children, title = "", config: conf = {}, open, onClose }: ModalProps) {
  const { t } = useTranslation("modal");
  const config = { ...DEFAULT_CONFIG, ...conf };
  const datas = useDatas(config);
  const modalRef = useRef<HTMLElement | null>(null);

  const handleStopPropagation = (event: MouseEvent) => {
    event.stopPropagation();
  };

  if (!open) return null;

  return (
    <section
      ref={modalRef}
      data-hastitle={Boolean(title)}
      data-hide="false"
      onClick={onClose}
      role="dialog"
      className={styles.modal__overlay}
      {...datas}
    >
      <div className={styles.modal__container} onClick={handleStopPropagation} role="alertdialog">
        {config.header ? (
          <div className={styles.modal__header}>
            {title ? (
              <h1 className={styles.modal__title}>{title}</h1>
            ) : (
              null
              // <picture className={styles.modal__logo}>
              //   <Image src={Logo} alt="" />
              // </picture>
            )}
          </div>
        ) : null}
        <div className={styles.modal__content}>
          {children(config)}
        </div>
        <button type="button" onClick={onClose} className={styles.modal__close}>
          {!config.close ? (
            <span>{t("modal-accept")}</span>
          ) : (
            null
            // <picture className={styles.modal__closeicon}>
            //   <Image src={IconClose} alt="" />
            // </picture>
          )}
        </button>
      </div>
    </section>
  );
}

export default withPortal(Modal, "#modal-root");
