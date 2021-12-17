import * as fcl from '@onflow/fcl';
import * as t from '@onflow/types';
import { isDapper } from '../utils/currencyCheck';

const ipfsApiKey = process.env.NEXT_PUBLIC_PINATA_API_KEY;
const ipfsPrivateKey = process.env.NEXT_PUBLIC_PINATA_PRIVATE_API_KEY;
const ipfsPostUrl = process.env.NEXT_PUBLIC_PINATA_POST_URL;
const ipfsGateway = process.env.NEXT_PUBLIC_IPFS_GATEWAY;
const marketAddress = process.env.NEXT_PUBLIC_NFTMARKET_CONTRACT;
const landingOnly = process.env.NEXT_PUBLIC_LANDING_ONLY === 'true';
const appName = process.env.NEXT_PUBLIC_APP_NAME;
const needsAuth = process.env.APPLICATION_NEEDS_AUTH === 'true';
const hasBrowse = process.env.NEXT_PUBLIC_HAS_BROWSE === 'true';
const hasSell = process.env.NEXT_PUBLIC_HAS_SELL === 'true';
const hasTransfer = process.env.NEXT_PUBLIC_HAS_TRANSFER === 'true';

const users = [
  {
    user: process.env.APPLICATION_USER,
    password: process.env.APPLICATION_PASSWORD
  }
];

const discovery = isDapper
  ? {
      'discovery.wallet': process.env.NEXT_PUBLIC_DAPPER_WALLET_DISCOVERY,
      'discovery.wallet.method': process.env.NEXT_PUBLIC_DAPPER_WALLET_DISCOVERY_METHOD
    }
  : {
      'challenge.handshake': process.env.NEXT_PUBLIC_WALLET_DISCOVERY
    };

fcl
  .config(discovery)
  .put('app.detail.title', 'Gaia Marketplace')
  .put('app.detail.icon', 'https://ongaia.com/logo192.png')
  .put('accessNode.api', process.env.NEXT_PUBLIC_ACCESS_NODE)
  .put('grpc.metadata', { api_key: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY })
  .put('0xFungibleToken', process.env.NEXT_PUBLIC_FUNGIBLE_TOKEN)
  .put('0xFlowToken', process.env.NEXT_PUBLIC_FLOW_TOKEN)
  .put('0xFUSDContract', process.env.NEXT_PUBLIC_FUSD)
  .put('0xProfile', process.env.NEXT_PUBLIC_PROFILE_CONTRACT)
  .put('0xNFTInterface', process.env.NEXT_PUBLIC_NFT_INTERFACE)
  .put('0xNFTContract', process.env.NEXT_PUBLIC_NFT_CONTRACT)
  .put('0xDapperUtilityCoin', process.env.NEXT_PUBLIC_DAPPER_UTILITY_COIN)
  // @TODO: Remove this variable
  .put('0xNFTMarket', marketAddress)
  .put('0xGaiaContract', process.env.NEXT_PUBLIC_GAIA_CONTRACT)
  .put('0xStorefrontContract', process.env.NEXT_PUBLIC_STOREFRONT_CONTRACT)
  .put('0xNFTContractStorefront', process.env.NEXT_PUBLIC_NON_FUNGIBLE_TOKEN);

export {
  fcl,
  t,
  ipfsApiKey,
  ipfsPrivateKey,
  ipfsPostUrl,
  ipfsGateway,
  marketAddress,
  landingOnly,
  appName,
  needsAuth,
  users,
  hasBrowse,
  hasSell,
  hasTransfer
};
