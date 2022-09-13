import type { LayoutProps } from "@typing/proptypes";

import styles from "@stylesComponents/Layout.module.scss";

import { Header, Footer } from "@components";

export default function Layout({ children }: LayoutProps) {
  return (
    <main className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </main>
  );
}
