import { Global } from "@emotion/react";
import type { AppProps /*, AppContext */ } from "next/app";
import { reset } from "styles/reset";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={reset} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;