import React from "react"
import Link from 'next/link'


const Import = () => {
  return (
    <>
  <div className="cont">
  <div className="fileUpload">

<div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="basic-addon3">https://gateway.ipfscdn.io/ipfs/</span>
  </div>
  <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3" />
</div>
  <button style={{width:"100%"}} className="btn btn-secondary">Fetch</button>
  </div>
  </div>
    </>
  )
};

export default Import;
