import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "nprogress/nprogress.css";
import Head from "next/head";
import { AuthContextProvider } from '../src/context/AuthContext';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/styles.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Type" content="text/html" charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500&family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </>
  );
}

export default MyApp;
