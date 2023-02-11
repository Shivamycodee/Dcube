import React,{useState,useEffect} from 'react'
import '@/styles/upload.module.css'
import { useGlobalContext } from 'context/cid';
import { UseGlobalContext } from 'context/connectWalletContext';
import { useSmartContext } from "context/smartContract";



import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const uploadSection= ()=>{  
  
  const { uploadData, fetchFile } = useGlobalContext();
  const {active} = UseGlobalContext();
  const { uploadOnContract } = useSmartContext();

  var flag = true;

   
   const display = async()=>{
        toast.promise(uploadData, {
          pending: {
            render() {
              return "Uploading file 📂";
            },
            position: "top-center",
          },
          success: {
             render({ data }) {

              if(flag) {
                setTimeout(()=>{
                  toast.promise(uploadOnContract(data.url.slice(32), data.name), {
                    pending: {
                      render() {
                        return "transaction...";
                      },
                      position: "top-center",
                    },
                    success: {
                      render() {
                        return "file Uploaded 😃";
                      },
                      position: "top-center",
                    },
                    error: "transaction canclled ",
                  });                
                },2000);
              }

               flag = false;
            },
            position: "top-center",
          },
          error: "select a file 🤯",
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
                  // onClick={() => {uploadOnContract != null ? display():alert("sign it")}}
                  onClick={()=>active ? display():alert("connect ur wallet")}
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