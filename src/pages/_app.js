import cidContextProvider from '@/context/cid';
import '@/styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";

 function App({ Component, pageProps }) {

  return (
    <>
    <cidContextProvider>
      <Head>
        <link rel="icon" href="/d3_icon.ico" />
        <title>DCUBE</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </cidContextProvider>
    </>
    );
}

export default App
