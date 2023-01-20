import React from  'react';
import {ethers} from 'ethers';
import Link from 'next/link'
import {useRouter} from 'next/router'

const navbar =  ()=>{

  const router = useRouter();

   const connectWallet = async()=>{
    var provider = new ethers.providers.Web3Provider(window.ethereum);
    var account = await provider.send("eth_requestAccounts", []);
    // var signer =  provider.getSigner();
    alert("public address: "+ account);
   }
  

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a style={{ marginLeft: 20 }} className="navbar-brand" href="/">
            DStore
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
                <button
                  id="connectWallet"
                  onClick={() => connectWallet()}
                  className="btn btn-secondary"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </>
    );
}

export default navbar;