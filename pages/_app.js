import App from "next/app";
import { AppProvider } from "../src/components/Context";
import GlobalStyle from "../src/styles/globals";
import FontStyles from "../src/styles/UI/fontes";

cosnt 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppProvider>
        <FontStyles />
        <GlobalStyle />
        <Component {...pageProps} />
      </AppProvider>
    </>
  );
}

export default MyApp;
