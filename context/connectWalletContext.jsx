import React, { useState, useContext, useEffect } from "react";
import { SignClient } from "@walletconnect/sign-client";
import { Web3Modal } from "@web3modal/standalone";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

export const connectWalletContext = React.createContext()


export default function connectWalletContextProvider({children}){
  
  const web3Modal = new Web3Modal({
    projectId: "ea319104e388438ad0bbf8c0ffce06b1",
    standaloneChains: ["eip155:5"]
  });

  const [signClient, setSignClient] = useState();
  const [sessions, setSessions] = useState([]);
  const [accounts, setAccounts] = useState([]);

  async function handleSend(){

    try{

      const tx = {
    from: accounts,
    to: "0xd46e8dd67c5d32be8058bb8eb970870f07244567",
    data: "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675",
    gas: "0x76c0", // 30400
    gasPrice: "0x9184e72a000", // 10000000000000
    value: "0x9184e72a", // 2441406250
    nonce: "0x117" // 279
      }

      const result = await signClient.request({
        topic: sessions.topic,
        request:{
           method:"eth_sendTransaction",
           params:[tx]
        },
        chainId:"eip155:5"
      })
      
    }catch(err){}
    console.log("result ",result)
  }


  async function createClient() {
    try {
      const signClient = await SignClient.init({
        projectId: "ea319104e388438ad0bbf8c0ffce06b1",
      });
      setSignClient(signClient);
      await subscribeToEvents(signClient);
    } catch (e) {
      console.log(e);
    }
  }

  async function onSessionConnect(session){

    if(!session) throw Error("session doesn't exist.");

    try{
       setSessions(session);
       setAccounts(session.namespaces.eip155.accounts[0].slice(9));
    }catch(err){console.error(err)}
       
  }


  async function handleConnect(){
    // if (!signClient) throw Error("SignClient does not exist");
    
        try {
          const proposalNamespace = {
            eip155: {
              chains: ["eip155:5"],
              methods: ["eth_sendTransaction"],
              events: ["connect", "disconnect"],
            },
          };

          const { uri, approval } = await signClient.connect({
            requiredNamespaces: proposalNamespace,
          });

          if (uri) {
            web3Modal.openModal({ uri });
            const sessionNamespace = await approval();
            onSessionConnect(sessionNamespace);
            web3Modal.closeModal()
          }
        } catch (e) {
          console.log(e);
        }
  }

  async function handleDisconnect() {
    try {
      await signClient.disconnect({
        topic: sessions.topic,
        code: 6000,
        message: "user disconnected",
      });
    } catch (err) {
      console.error(err);
    }
    console.log("deleted")
    reset();
  }

  const reset = ()=>{
    setAccounts([])
    setSessions([])
  }

  async function subscribeToEvents(client){
    
     try{
      client.on("session_deleted",()=>{
        console.log("user disconnected the session from their wallet");
        reset();
      })
     }catch(e){}

  }

  useEffect(() => {
    if (!signClient) {
      createClient();
    }
  }, [signClient]);

  //  const connectWallet = async () => {
  //    var provider = new ethers.providers.Web3Provider(window.ethereum);
  //    var account = await provider.send("eth_requestAccounts", []);
  //    // var signer =  provider.getSigner();
  //    if (account) {
  //      setTimeout(
  //        toast.success("Wallet Connected", {
  //          position: toast.POSITION.TOP_CENTER,
  //          theme: "dark",
  //        }),
  //        2000
  //      );
  //    }
  //  };

  return (
    <connectWalletContext.Provider
      value={{ handleConnect, accounts, handleDisconnect, handleSend }}
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