import { withPortal } from "@hoc";

import type { LoaderProps } from "@typing";

import { LoaderPage as Styles } from "@stylesComponents";

import { Loader } from "@components";

const LoaderPage = ({ msg = "" }: LoaderProps) => (
  <Styles.Container>
    <Loader msg={msg} />
  </Styles.Container>
);

export default withPortal(LoaderPage, "#loader-root");
