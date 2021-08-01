const axios = require('axios');
const FormData = require('form-data');

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  const res = await axios.post(url, JSONBody, {
    headers: {
      pinata_api_key: process.env.pinata_api_key,
      pinata_secret_api_key: process.env.pinata_secret_api_key
    }
  })
  return res.data.IpfsHash;
}

export const pinFileToIPFS = async (file) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  let data = new FormData();
  data.append('file', file)

  const res = await axios.post(url, data, {
    maxContentLength: 'Infinity',
    headers: {
      'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
      pinata_api_key: process.env.pinata_api_key,
      pinata_secret_api_key: process.env.pinata_secret_api_key
    }
  });
  return res.data.IpfsHash;
}

//CHANGE
export const encodedParams = "0d8126e200000000000000000000000063e80cf7cc0b9a0d937a2c1b186b2cbbda1ce0360000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000008000000000000000000000000000000000000000000000000000000000000000c000000000000000000000000000000000000000000000000000000000000000062230786666220000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a676f6f676c652e636f6d00000000000000000000000000000000000000000000"
