import CidContextProvider from "../../context/cid";
import ConnectWalletProvider from "../../context/connectWalletContext";
import '@/styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";

 function App({ Component, pageProps }) {

  return (
    <CidContextProvider>
    <ConnectWalletProvider>
      <Head>
        <link rel="icon" href="/d3_icon.ico" />
        <title>DCUBE</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
  </ConnectWalletProvider>
  </CidContextProvider>
    );
}

export default App
