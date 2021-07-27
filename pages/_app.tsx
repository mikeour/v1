import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import { ReactQueryDevtools } from "react-query/devtools";
import SiteLayout from "components/SiteLayout";
import { global, darkTheme } from "styles";
import type { AppProps } from "next/app";

const globalStyles = global({
  "*, :before, :after": {
    p: 0,
    m: 0,
    boxSizing: "border-box",
  },

  "html, body": {
    height: "100%",
  },

  html: {
    // scrollBehavior: "smooth",
    scrollPaddingTop: "2rem",
  },

  body: {
    maxWidth: "100vw",
    fontSize: "18px",
    overscrollBehavior: "none",
    fontFamily: "$karla",
    bg: "$slate2",
    color: "$gray12",
  },

  "p, ol, li": {
    color: "$slate11",
    lineHeight: 1.75,
  },

  "a, a:visited": {
    color: "$indigo10",
    textDecorationColor: "$indigo10",
    textDecorationThickness: ".075em",
    textUnderlineOffset: ".09em",
    transition: "all 300ms ease",
  },

  "a:focus": {
    color: "$indigo11",
    outline: "2px solid $indigo11",
    outlineOffset: "2px",
  },

  "a:hover": { color: "$indigo12" },

  "a:hover,a:active": { outline: "0" },

  "a:link": { transition: "color 300ms ease" },

  "a:not([class])": {
    WebkitTextDecorationSkip: "ink",
    textDecorationSkip: "ink",
  },

  code: {
    fontFamily: "$code",
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  globalStyles();

  return (
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

        {/* <ReactQueryDevtools /> */}
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default MyApp;
