import React,{useState,useEffect} from "react"
import '@/styles/history.module.css'
import { useGlobalContext } from "context/cid";
import { UseGlobalContext } from "context/connectWalletContext";
import { useSmartContext } from "context/smartContract";

// import connectWalletCom from "@/custom-components/connectWallet";


const HistoryPage = () => {

  const { getUploadData,key,decrypt } = useSmartContext();

  const [data,setData] = useState([]);

  useEffect(()=>{
      getUploadData().then((_data)=>setData(_data))
  },[])

  function getCurrentDate(epoc){
    const date = new Date(epoc *1000);
    return date;
  }


  
  return (
    <>
      <div className="cont">
        <div className="fileUpload">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">File Name</th>
                <th scope="col">upload Date</th>
                <th scope="col">URL</th>
              </tr>
            </thead>
            <tbody>
              { data.map((item, i) => {
                  return (
                    <tr>
                      <td key={i + 4}>{i + 1}</td>
                      <td key={i + 1}>{item[2]}</td>
                      <td key={i + 2}>
                        {getCurrentDate(item[1]).toLocaleDateString()}
                      </td>
                      <td key={i + 3}>
                        <a
                          target="_blank"
                          href={"https://gateway.ipfscdn.io/ipfs/"+decrypt(item[0],key)}
                          alt="filelink"
                        >
                          URL...
                        </a>
                        {/* <embed
                          type="image/jpg"
                          src={item[0]}
                          width="300"
                          height="200"
                        /> */}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
