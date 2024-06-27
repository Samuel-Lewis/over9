import '../styles/globals.css';
import Script from 'next/script';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        async
        src="https://umami.samuel-lewis.com/script.js"
        data-website-id="2b021d01-1dc3-4a3b-aca5-29a944490e31"
      />
    </>
  );
}

export default MyApp;
