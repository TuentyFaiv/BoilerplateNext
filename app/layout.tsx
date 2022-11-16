import type { RooLayoutProps } from "@typing/proptypes";

import { GlobalStyles, StyleRegistry } from "@styles";

export default function RootLayout({ children }: RooLayoutProps) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <StyleRegistry>
        <body>
          <GlobalStyles />
          {children}
        </body>
      </StyleRegistry>
    </html>
  );
}
