import { Html, Head, Main, NextScript } from "next/document";

import type { DocumentProps } from "next/document";

export default function Document(props: DocumentProps) {

  const { __NEXT_DATA__: NEXT_DATA } = props;

  return (
    <Html lang={NEXT_DATA.locale}>
      <Head />
      <body>
        <div id="loader-root" />
        <div id="modal-root" />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
