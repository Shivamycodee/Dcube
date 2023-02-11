/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    Contract_ABI: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "User",
            type: "address",
          },
          {
            indexed: true,
            internalType: "string",
            name: "CID",
            type: "string",
          },
          {
            indexed: false,
            internalType: "uint256",
            name: "TimeStamp",
            type: "uint256",
          },
          {
            indexed: false,
            internalType: "string",
            name: "FileName",
            type: "string",
          },
        ],
        name: "CidGenerate",
        type: "event",
      },
      {
        inputs: [],
        name: "getUploadFile",
        outputs: [
          {
            components: [
              {
                internalType: "string",
                name: "CID",
                type: "string",
              },
              {
                internalType: "uint256",
                name: "timeStamp",
                type: "uint256",
              },
              {
                internalType: "string",
                name: "fileName",
                type: "string",
              },
            ],
            internalType: "struct Dcube.uploadedFile[]",
            name: "",
            type: "tuple[]",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_cid",
            type: "string",
          },
          {
            internalType: "string",
            name: "_fileName",
            type: "string",
          },
        ],
        name: "uploadfile",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    Contract_Address: "0xD4790F9f95655D1f881278696baE5811A01eD2D5",
    AES_KEY: "123sdkfjhq9238qh308hq08hwsdfs8afh8",
  },
};

module.exports = nextConfig
