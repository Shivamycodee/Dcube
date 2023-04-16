import React, {useState, useEffect, useContext, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/608f16e00a094f44bedc66d480314881`,
  appName: "dcube",
  supportedChainIds: [1, 3, 4, 5, 42, 6, 80001, 97,137,43114,43113,1088,588,56,250,4002,1313161554,1313161555],
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/608f16e00a094f44bedc66d480314881`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 6, 80001, 97,137,43114,43113,1088,588,56,250,4002,1313161554,1313161555],
});


export const connectWalletContext = React.createContext()


export default function connectWalletContextProvider({children}){

   const { activate, deactivate, active, library ,chainId, account } = useWeb3React();
  

  const handleConnect = useCallback(
    async (str) => {
      localStorage.setItem("wallet", str);
      if (str === "metamask") await activate(Injected)
      else if (str === "coinbase") await activate(CoinbaseWallet)
      else await activate(WalletConnect)
      toast("wallet connected");
    },
    []
  );

  
  const connect = useCallback(
    async() => {
    const str =  localStorage.getItem("wallet");
     if (str === "metamask") await activate(Injected);
     else if (str === "coinbase") await activate(CoinbaseWallet);
     else if(str != null) await activate(WalletConnect);
    }, [active]);


  useEffect(() => {
      connect();
  }, [connect]);

 
  return (
    <connectWalletContext.Provider
      value={{ handleConnect,active, account, deactivate,library }}
    >
      <ToastContainer
        autoClose={1200}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        draggable
      />
      {children}
    </connectWalletContext.Provider>
  );
}

export function UseGlobalContext(){
    return useContext(connectWalletContext);
}