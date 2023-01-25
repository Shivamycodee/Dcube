import React from "react"
import '@/styles/history.module.css'
import { useGlobalContext } from "context/cid";

const HistoryPage = () => {


    const { logs } = useGlobalContext();
    var k = 1;

  return (
    <>
      <div className="cont">
        <div style={{ overflow: "hidden" }} className="fileUpload">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">No.</th>
                <th scope="col">File Name</th>
                <th scope="col">size</th>
                <th scope="col">type</th>
                <th scope="col">upload Date</th>
                <th scope="col">CID</th>
              </tr>
            </thead>
            <tbody>
              {logs.map((item)=>{
                return ( <tr>
                  <td key={k}>{k}</td>{k+=1}
                  <td key={k}>{item.name}</td>
                  <td key={k}>{item.size}</td>
                  <td key={k}>{item.type}</td>
                  <td key={k}><a target="_blank" href={item.url} alt="filelink">URL...</a></td>
              </tr>)
              })
              }
             
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
