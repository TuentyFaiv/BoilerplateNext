import type { LayoutProps } from "@typing/proptypes";

import { Layout as Styles } from "@stylesComponents";

import { Header, Footer } from "@components";

export default function Layout({ children }: LayoutProps) {
  return (
    <Styles.Container>
      <Header />
      {children}
      <Footer />
    </Styles.Container>
  );
}
