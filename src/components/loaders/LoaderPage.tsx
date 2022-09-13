import { withPortal } from "@hoc";

import type { LoaderProps } from "@typing";

// import { LoaderPage as Styles } from "@stylesComponents";

import { Loader } from "@components";

const LoaderPage = ({ msg = "" }: LoaderProps) => (
  <div>
    <Loader msg={msg} />
  </div>
);

export default withPortal(LoaderPage, "#loader-root");
