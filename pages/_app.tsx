import "../styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "../redux/store";
import NextNProgress from "nextjs-progressbar";
import Login from "./login";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#29D"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
