import type { AppProps } from "next/app";
import GlobalStyles from "../styles/globals";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("RENDER");
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
