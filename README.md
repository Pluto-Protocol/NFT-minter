<p align="center"><img src="client/public/logo.svg" align="center" width="250"></p>
<h2 align="center">NFT Minter</h2>

<p align="center"><b>🏗️ Mint ERC721 or ERC1155 standard tokens on Polygon (Previously Matic Network)</b></p>

Mint NFT on polygon at speed of light!

MINT NFTS on POLYGON DOCUMENTATION:

INFRASTRUCTURE/API KEYS:
Frontend env:
base_url=http://localhost:3000
pinata_api_key=
pinata_secret_api_key=
biconomy_api_key=
covalent_key=

Backend env:
PRIVATE_KEY=
base_url:'http://localhost:8080'
DB_USER:
DB_PASSWORD:
DB_URL:
DB_NAME:


Files to change:
Server.js, IPFS.js, Biconomy-vars.js

1. Create MongoDB cluster, API keys from piñata, biconomy, covalent
2. Create env files for frontend and backend
3. Deploy contracts 721 contracts
4. Deploy 1155 contracts
5. Get abi from 1155
6. Get ABI for ERC1155(721 not necessary)
7. Get encoded params from  abi.hashex.org: 
￼
8. Copy output and update 2 instances encodedParams in your code
9. Add both smart contracts to biconomy with ABI
10. Update biconomy vars with deployed contract address
11. Run both backend and frontend with nom run start
