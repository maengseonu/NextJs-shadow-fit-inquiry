import "../styles/globals.css";
import type { AppProps } from "next/app";
import wrapper from "../redux/store";
import LoadingComponent from "../components/common/LoadingComponent";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default wrapper.withRedux(MyApp);
