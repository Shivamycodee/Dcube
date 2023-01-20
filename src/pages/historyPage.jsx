import React from "react"
import '@/styles/history.module.css'

const HistoryPage = () => {
  return (
    <>
      <div className="cont">
        <div style={{ overflow: "hidden" }} className="fileUpload">
          <table class="table">
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
              <tr>
                <th scope="row">1</th>
                <td>mountain.png</td>
                <td>24 kb</td>
                <td>image/jpg</td>
                <td>12/11/2021</td>
                <td>
                  <a
                    target="_blank"
                    href="https://gateway.ipfscdn.io/ipfs/QmUqBtTpJids8zUH2PaPx3Czdj6iMXXS7Y3XE3jWVwrjWQ/0"
                  >
                    QmUqBtTp...eMs
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>miko.png</td>
                <td>24 kb</td>
                <td>image/jpg</td>
                <td>12/11/2021</td>

                <td>
                  <a
                    target="_blank"
                    href="https://gateway.ipfscdn.io/ipfs/QmUqBtTpJids8zUH2PaPx3Czdj6iMXXS7Y3XE3jWVwrjWQ/0"
                  >
                    QmUqBtTp...eMs
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>hiko.png</td>
                <td>24 kb</td>
                <td>image/jpg</td>
                <td>12/11/2021</td>
                <td>
                  <a
                    target="_blank"
                    href="https://gateway.ipfscdn.io/ipfs/QmUqBtTpJids8zUH2PaPx3Czdj6iMXXS7Y3XE3jWVwrjWQ/0"
                  >
                    QmUdBsTp...eMk
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HistoryPage;
