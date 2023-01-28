import React, { useState, useContext, useEffect } from "react";
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
  supportedChainIds: [1, 3, 4, 5, 42, 6, 80001, 97],
});

const WalletConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/608f16e00a094f44bedc66d480314881`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 6, 80001, 97],
});


export const connectWalletContext = React.createContext()

export default function connectWalletContextProvider({children}){

   const { activate, deactivate, active, chainId, account } = useWeb3React();

      const [flag, setFlag] = useState(false);

      

 async function handleConnect(str){
        if(str === "metamask") await activate(Injected)
        else if(str === "coinbase") activate(CoinbaseWallet)
        else activate(WalletConnect)
        toast("wallet connected")
  }

  // useEffect(()=>{
  //   if(active) setFlag(false);
  // },[flag])

 
  function handleDisconnect(){

  }

  return (
    <connectWalletContext.Provider
      value={{ handleConnect, setFlag, flag, active, account, deactivate }}
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