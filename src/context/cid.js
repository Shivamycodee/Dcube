import React, { useState,useContext, useEffect} from "react";

export const cidContext = React.createContext();

export const cidContextProvider = ({children}) => {

    const fileObj = {};

   const [data, setData] = useState(null);

 async function fetchFile (event){
     setData(event.target.files[0]);
     fileObj["name"] = event.target.files[0].name;
     fileObj["size"] = event.target.files[0].size / 1000 + " kb";
     fileObj["type"] = event.target.files[0].type;
     console.log("fileObj", fileObj);

     //  var GetFile = new FileReader();
     //   GetFile.readAsBinaryString(event.target.files[0]);
     //  GetFile.onload =  async(event) => {
     //    fileData = GetFile.result;
     //    console.log(fileData)
     //  };
   };

   useEffect(() => {console.log("useEffect applied.")}, [data]);

   async function uploadData() {
     if (data !== null) {
       const Storage = new ThirdwebStorage();
       console.log("data : ", data);
       const upload = await Storage.upload(data);
       var url = Storage.resolveScheme(upload);
       console.log("url", url);
     } else {
       console.log("please select a file");
     }
   }


  return (
    <cidContext.Provider value={{ uploadData , fetchFile }}>
      {children}
    </cidContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(cidContext);
};

export default cidContextProvider;
