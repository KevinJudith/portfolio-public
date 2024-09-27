// pages/_app.js
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css'; // Custom global styles
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    <Head>
        <link rel="icon" href="/favicon.ico" />
    </Head>
  return <Component {...pageProps} />;
}

export default MyApp;