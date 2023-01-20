import React from 'react'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from "url";


  export default function uploadFile({response}) {

    // console.log("response : ",response)
    return (
      <div>uploadFile</div>
      )
    }

export async function getStaticProps() {
     const _filename = fileURLToPath(import.meta.url);
    const _dirname = path.dirname(_filename);

    const pagesDirectory = path.join(process.cwd(),"/filesHolder/test.txt");

    // const res = fs.readFileSync(_dirname + "\test.txt")
    const res = fs.readFileSync(pagesDirectory);
    const response = await res.json();
    
    return {
      props: {response}
    };
}