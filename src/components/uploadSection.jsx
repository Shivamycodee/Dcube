import React,{useState,useEffect} from 'react'
import { ThirdwebStorage } from "@thirdweb-dev/storage";
import '@/styles/upload.module.css'
import { useGlobalContext } from '@/context/cid';

const uploadSection= ()=>{  

  const { uploadData, fetchFile } = useGlobalContext();

//    const [data,setData] = useState(null);
  
//    const fetchFile = async(event)=>{ 
//     setData(event.target.files[0]);
//     fileObj["name"] = event.target.files[0].name;
//     fileObj["size"] = event.target.files[0].size/1000 + " kb";
//     fileObj["type"] = event.target.files[0].type;
//    }

//    useEffect(()=>{},[data])

//  async function uploadData(){
//       if(data !== null){
//         const Storage = new ThirdwebStorage();
//         console.log("data : ",data)
//         const upload = await Storage.upload(data);
//         var url = Storage.resolveScheme(upload);
//         console.log("url",url)
//       }else{
//         console.log("please select a file")
//       }
//   }

    return (
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
                onClick={() => uploadData()}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default uploadSection;