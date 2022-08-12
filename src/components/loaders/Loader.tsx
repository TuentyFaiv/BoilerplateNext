import type { LoaderProps } from "@typing";

import { Loader as Styles } from "@stylesComponents";

const Loader = ({ msg }: LoaderProps) => (
  <Styles.Container>
    {msg}
  </Styles.Container>
);

export default Loader;
