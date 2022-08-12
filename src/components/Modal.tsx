// import Image from "next/image";
import { useRef } from "react";
import { useTranslation } from "next-i18next";
import { withPortal } from "@hoc";
import { useDatas } from "@hooks";

import type { MouseEvent } from "react";
import type { ModalProps } from "@typing";

import { Modal as Styles } from "@stylesComponents";

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
    <Styles.Overlay
      ref={modalRef}
      data-hastitle={Boolean(title)}
      data-hide="false"
      onClick={onClose}
      role="dialog"
      {...datas}
    >
      <Styles.Container onClick={handleStopPropagation} role="alertdialog">
        {config.header ? (
          <Styles.Header>
            {title ? (
              <Styles.Title>{title}</Styles.Title>
            ) : (
              null
              // <Styles.Logo src={Logo} alt="" />
            )}
          </Styles.Header>
        ) : null}
        <Styles.Content>
          {children(config)}
        </Styles.Content>
        <Styles.Close type="button" onClick={onClose}>
          {!config.close ? (
            <span>{t("modal-accept")}</span>
          ) : (
            null
            // <Styles.CloseIcon src={IconClose} alt="" />
          )}
        </Styles.Close>
      </Styles.Container>
    </Styles.Overlay>
  );
}

export default withPortal(Modal, "#modal-root");
