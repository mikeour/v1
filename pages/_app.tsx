import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "react-query";
import { Hydrate } from "react-query/hydration";
import useProgress from "hooks/useProgress";
import { darkTheme } from "styles";
import createGlobalStyles from "styles/global";
import type { AppProps } from "next/app";

createGlobalStyles();

function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  useProgress();

  return (
    <ThemeProvider
      attribute="class"
      value={{ light: "light-theme", dark: darkTheme.toString() }}
      defaultTheme="dark"
      enableColorScheme={false}
      enableSystem={false}
    >
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
