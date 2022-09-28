import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SWRConfig } from "swr"
import { lightTheme } from "../themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
     <SWRConfig 
      value={{
        refreshInterval: 3000,
        fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
      }}
    >
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </SWRConfig>
  );
}
export default MyApp;
