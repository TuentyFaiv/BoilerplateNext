import type { LoaderProps } from "@typing/proptypes";

import styles from "@stylesComponents/Loader.module.scss";

const Loader = ({ msg }: LoaderProps) => (
  <div className={styles.loader}>
    {msg}
  </div>
);

export default Loader;
