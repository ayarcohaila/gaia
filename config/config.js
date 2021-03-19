import * as fcl from '@onflow/fcl';
import * as t from '@onflow/types';

const ipfsApiKey = process.env.REACT_APP_PINATA_API_KEY;
const ipfsPrivateKey = process.env.REACT_APP_PINATA_PRIVATE_API_KEY;
const ipfsPostUrl = process.env.REACT_APP_PINATA_POST_URL;
const ipfsGateway = process.env.REACT_APP_PINATA_GATEWAY;
const marketAddress = process.env.REACT_APP_NFTMARKET_CONTRACT;
const landingOnly = process.env.REACT_APP_LANDING_ONLY === 'true';

fcl
  .config()
  .put('accessNode.api', process.env.REACT_APP_ACCESS_NODE)
  .put('challenge.handshake', process.env.REACT_APP_WALLET_DISCOVERY)
  .put('0xFungibleToken', process.env.REACT_APP_FUNGIBLE_TOKEN)
  .put('0xFlowToken', process.env.REACT_APP_FLOW_TOKEN)
  .put('0xProfile', process.env.REACT_APP_PROFILE_CONTRACT)
  .put('0xNFTInterface', process.env.REACT_APP_NFT_INTERFACE)
  .put('0xNFTContract', process.env.REACT_APP_NFT_CONTRACT)
  .put('0xNFTMarket', marketAddress);

export { fcl, t, ipfsApiKey, ipfsPrivateKey, ipfsPostUrl, ipfsGateway, marketAddress, landingOnly };
