import { useState } from "react";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import SiteLayout from "components/SiteLayout";
import { darkTheme } from "styles";
import globalStyles from "styles/global";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  globalStyles();

  return (
    <>
      <Head>
        <title key="title">mikeour.io</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ThemeProvider
        attribute="class"
        value={{ light: "light-theme", dark: darkTheme.toString() }}
        defaultTheme="light"
        enableColorScheme={false}
        enableSystem={false}
      >
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <SiteLayout>
              <Component {...pageProps} />
            </SiteLayout>
          </Hydrate>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
