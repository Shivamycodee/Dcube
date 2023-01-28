import CidContextProvider from "../../context/cid";
import ConnectWalletProvider from "../../context/connectWalletContext";
import '@/styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'
import "bootstrap/dist/css/bootstrap.min.css";

import { Web3ReactProvider } from "@web3-react/core";
import Web3 from "web3";

function getLibrary(provider) {
  return new Web3(provider);
}

 function App({ Component, pageProps }) {

  // window.Buffer = Buffer;

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
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
     </Web3ReactProvider>
  );
}

export default App
