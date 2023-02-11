import React,{useEffect} from "react";
import { UseGlobalContext } from "context/connectWalletContext";
import ConnectWalletCom from "../custom-components/useConnectWallet";



export default function Card({flag,setFlag}) {

    const {handleConnect} = UseGlobalContext();

    // const [connectToWallet] = ConnectWalletCom();

  return (
    <>
      <div className="modalOwn-overlay">
        <div className="modalOwn-container">
          <div onClick={() => handleConnect("metamask")} className="holder">
            <img
              src="images/logo_metamask.jpg"
              alt="wallet"
              className="modalOwn-img"
            />
          </div>
          <div onClick={() => handleConnect("coinbase")} className="holder">
            <img
              src="images/logo-coinbase.png"
              alt="wallet"
              className="modalOwn-img"
            />
          </div>
          <div onClick={() => handleConnect("connectWallet")} className="holder">
            <img
              src="images/logo-wallet-connect.jpeg"
              alt="wallet"
              className="modalOwn-img"
            />
          </div>
          <button onClick={()=>setFlag(false)} className="btn btn-primary btn-cls">close</button>
        </div>
      </div>
    </>
  );
}

