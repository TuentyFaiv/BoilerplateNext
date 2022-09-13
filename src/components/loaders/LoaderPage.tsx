import { withPortal } from "@hoc";

import type { LoaderProps } from "@typing/proptypes";

import styles from "@stylesComponents/LoaderPage.module.scss";

import { Loader } from "@components";

const LoaderPage = ({ msg = "" }: LoaderProps) => (
  <div className={styles.loaderpage}>
    <Loader msg={msg} />
  </div>
);

export default withPortal(LoaderPage, "#loader-root");
