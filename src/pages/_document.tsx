import Document, { Html, Head, Main, NextScript } from "next/document";
// import { ServerStyleSheet } from "styled-components";

// import type { DocumentContext } from "next/document";

export default class MyDocument extends Document {
  // static async getInitialProps(ctx: DocumentContext) {
  //   const sheet = new ServerStyleSheet();
  //   const originalRenderPage = ctx.renderPage;

  //   try {
  //     ctx.renderPage = () => originalRenderPage({
  //       enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
  //     });

  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: [initialProps.styles, sheet.getStyleElement()]
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }

  render() {
    const { __NEXT_DATA__: NEXT_DATA } = this.props;

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
}
