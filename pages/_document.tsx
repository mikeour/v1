import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssString } from "styles";

export default class Document extends NextDocument {
  faviconSrc =
    process.env.NODE_ENV === "production" ? "/favicon.png" : "/favicon-dev.png";

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Karla&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssString() }}
          />
          <link rel="icon" type="image/png" href={`${this.faviconSrc}?v=2`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
