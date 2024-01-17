import Head from "next/head";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* Altere o título conforme necessário */}
        <title>Byte Bushido | Devs</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
