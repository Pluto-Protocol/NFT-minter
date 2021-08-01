export const domainType = [{
  name: "name",
  type: "string"
}, {
  name: "version",
  type: "string"
}, {
  name: "salt",
  type: "uint256"
}, {
  name: "verifyingContract",
  type: "address"
}];

export const metaTransactionType = [
  { name: "nonce", type: "uint256" },
  { name: "from", type: "address" },
  { name: "functionSignature", type: "bytes" }
];
//CHAAGE
export const domainData721 = {
  name: "PEPE ERC721 NFT MINTER",
  version: "1",
  salt: 137,
  verifyingContract: "0x0a4a4dB2225828B36Bd6D1e86424E67D514b45e9"
};

//CHANGE
export const domainData1155 = {
  name: "PEPE ERC1155 NFT MINTER",
  version: "1",
  salt: 137,
  verifyingContract: "0x824bb3E253d1168513dbc91ddAFBa04510638bbC"
};
