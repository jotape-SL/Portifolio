import App from "next/app";
import GlobalStyle from "../src/styles/globals";
import FontStyles from "../src/styles/UI/fontes";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <FontStyles/>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
