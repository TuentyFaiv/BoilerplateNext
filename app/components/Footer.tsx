import Image from "next/image";

import { Footer as Styles } from "@cstyles";

export default function Footer() {
  return (
    <Styles.Container>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by
        {" "}
        <Styles.Logo>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </Styles.Logo>
      </a>
    </Styles.Container>
  );
}
