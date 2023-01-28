import React from 'react'
import '@/styles/upload.module.css'
import { useGlobalContext } from 'context/cid';

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const uploadSection= ()=>{  
  
  const { uploadData, fetchFile } = useGlobalContext();
  
    const display = ()=>{
        toast.promise(uploadData, {
          pending: {
            render() {
              return "Uploading file 📂";
            },
            position: "top-center",
          },
          success: {
            render() {
              return "file Uploaded 😃";
            },
            position: "top-center",
          },
          error: "Promise rejected 🤯",
        });
    }

    return (
      <>
        <ToastContainer
          autoClose={1200}
          hideProgressBar={false}
          closeButton={false}
          newestOnTop={false}
          rtl={false}
          draggable
        />
        <div className="cont">
          <div className="fileUpload">
            <div id="upSection">
              <div id="upTitle">
                <p> Upload your file here... </p>
                <hr />
              </div>
              <div id="upInput">
                <img
                  alt="upload"
                  src="https://100dayscss.com/codepen/upload.svg"
                ></img>
                <input
                  onChange={(event) => fetchFile(event)}
                  id="myFile"
                  name="myFile"
                  type="file"
                  required
                ></input>
              </div>
              <div id="upBtn">
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={() => display()}
                >
                  Upload
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default uploadSection;