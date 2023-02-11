import React,{useContext,createContext,useCallback} from 'react'
import {UseGlobalContext} from './connectWalletContext';
import crypto from 'crypto'


export const smartContractContext = createContext();

export default function smartContractContextProvider({children}) {

  const {account,library} = UseGlobalContext();

let key = crypto
  .createHash("sha256")
  .update(String(process.env.AES_KEY))
  .digest("base64")
  .slice(0, 32);


  function encrypt(data, key) {
    const algorithm = "aes-256-cbc";
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(data, "utf8", "hex");
    encrypted += cipher.final("hex");
    return `${iv.toString("hex")}:${encrypted}`;
  }

  function decrypt(encryptedData, key) {
    console.log(encryptedData);
    const [ivHex, encryptedHex] = encryptedData.split(":");
    console.log("ivHex : ",ivHex);
    const iv = Buffer.from(ivHex, "hex");
    const encrypted = Buffer.from(encryptedHex, "hex");
    const algorithm = "aes-256-cbc";
    const decipher = crypto.createDecipheriv(algorithm, key, iv);
    let decrypted = decipher.update(encrypted, "hex", "utf8");
    decrypted += decipher.final("utf8");
    return decrypted;
  }



  const uploadOnContract = async (url, name) => {
    const contract = new library.eth.Contract(
      process.env.Contract_ABI,
      process.env.Contract_Address
    );
    const res = await contract.methods.uploadfile(encrypt(url,key),name).send({
      from: account,
    });
   
    console.log("res : ", res);
  };

  const getUploadData = useCallback(async () => {
    const contract = new library.eth.Contract(
      process.env.Contract_ABI,
      process.env.Contract_Address
    );
    const uploadArr = await contract.methods
      .getUploadFile()
      .call({ from: account });
    return uploadArr;
  },[account]);

  return (
    <smartContractContext.Provider
     value={{ uploadOnContract, getUploadData,decrypt,key}}>
      {children}
    </smartContractContext.Provider>
  );
}


export const useSmartContext = ()=>{
  return useContext(smartContractContext);
}

