import { Card } from '@cstyles';

import { Home as Styles } from "@pstyles";

import { Footer } from "@components";

export default function Home() {
  return (
    <Styles.Container>
      <Styles.Main>
        <Styles.Title>
          Welcome to <a href="https://nextjs.org">Next.js 13!</a>
        </Styles.Title>
        <Styles.Description>
          Get started by editing{' '}
          <Styles.Code>app/page.tsx</Styles.Code>
        </Styles.Description>
        <Styles.Grid>
          <Card.Container href="https://beta.nextjs.org/docs">
            <Card.Title>Documentation &rarr;</Card.Title>
            <Card.Text>Find in-depth information about Next.js 13</Card.Text>
          </Card.Container>

          <Card.Container
            href="https://github.com/vercel/next.js/tree/canary/examples"
          >
            <Card.Title>Examples &rarr;</Card.Title>
            <Card.Text>Explore the Next.js 13 playground.</Card.Text>
          </Card.Container>

          <Card.Container
            href="https://vercel.com/templates/next.js/app-directory?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Card.Title>Deploy &rarr;</Card.Title>
            <Card.Text>Deploy your Next.js site to a public URL with Vercel.</Card.Text>
          </Card.Container>
        </Styles.Grid>
      </Styles.Main>
      <Footer />
    </Styles.Container>
  );
}
