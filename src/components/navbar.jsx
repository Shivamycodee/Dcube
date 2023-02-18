import React,{useState,useEffect,useCallback} from  'react';
import Link from 'next/link'
import { UseGlobalContext } from 'context/connectWalletContext';
import { toast, ToastContainer } from "react-toastify";
import WalletCard from './walletCard'
import Copy from "copy-to-clipboard";

import useConnectWalletCom  from "../custom-components/useConnectWallet";

const navbar =  ()=>{
  
  const {  active, account, deactivate } = UseGlobalContext();
  
  
  // const [,Active, Account,getActive] = useConnectWalletCom();
  
  const [flag, setFlag] = useState(false);
  useEffect(()=>{
    console.log("flag is : ",flag);
  },[flag,setFlag])

  // const val = useCallback(()=>getActive(),[Active]);
  
  function handleCopy() {
    Copy(account);
    toast(`copied: ${account}`);
  }

  // useEffect(()=>{
  //   val();
  // },[val])

    return (
      <>
        <ToastContainer
          autoClose={1200}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          draggable
        />
        {flag && <WalletCard flag={flag} setFlag={setFlag}/>}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a style={{ marginLeft: 20 }} className="navbar-brand" href="/">
            DCUBE
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Upload
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="importPage">
                  Import
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="historyPage">
                  History
                </Link>
              </li>
              <li>
                <div id="detail-holder">
                  {active ? (
                    <>
                      <div onClick={() => handleCopy()} id="accout-board">
                        <code>{account}</code>
                      </div>
                      <button
                        id="connectWallet"
                        onClick={() => {
                          deactivate();
                          toast("wallet disconnect");
                        }}
                        className="btn btn-secondary"
                      >
                        Disconnect
                      </button>
                    </>
                  ) : (
                    <button
                      id="connectWallet"
                      onClick={() => setFlag(true)}
                      className="btn btn-secondary"
                    >
                      Connect Wallet
                    </button>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default navbar;
