import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';

const {
  NEXT_PUBLIC_ACCESS_NODE,
  NEXT_PUBLIC_FUNGIBLE_TOKEN,
  NEXT_PUBLIC_FLOW_TOKEN,
  NEXT_PUBLIC_FUSD,
  NEXT_PUBLIC_PROFILE_CONTRACT,
  NEXT_PUBLIC_NFT_INTERFACE,
  NEXT_PUBLIC_NFT_CONTRACT,
  NEXT_PUBLIC_DAPPER_UTILITY_COIN,
  NEXT_PUBLIC_GAIA_CONTRACT,
  NEXT_PUBLIC_STOREFRONT_CONTRACT,
  NEXT_PUBLIC_NON_FUNGIBLE_TOKEN
} = process.env;
import hashes from './transactionsHashes';

const checkHash = async transaction => {
  const result = loadScript(`${transaction}.cdc`);
  const hashScript = createHash('sha256').update(result).digest('hex');
  const matches = hashes[transaction] === hashScript;

  return { transaction: result, hashScript, matches };
};

function loadScript(fileName) {
  return fs
    .readFileSync(path.join(__dirname, '../flow/transactions', fileName), 'utf8')
    .replace('accessNode.api', NEXT_PUBLIC_ACCESS_NODE)
    .replace('0xFungibleToken', NEXT_PUBLIC_FUNGIBLE_TOKEN)
    .replace('0xFlowToken', NEXT_PUBLIC_FLOW_TOKEN)
    .replace('0xFUSDContract', NEXT_PUBLIC_FUSD)
    .replace('0xProfile', NEXT_PUBLIC_PROFILE_CONTRACT)
    .replace('0xNFTInterface', NEXT_PUBLIC_NFT_INTERFACE)
    .replace('0xNFTContract', NEXT_PUBLIC_NFT_CONTRACT)
    .replace('0xDapperUtilityCoin', NEXT_PUBLIC_DAPPER_UTILITY_COIN)
    .replace('0xGaiaContract', NEXT_PUBLIC_GAIA_CONTRACT)
    .replace('0xStorefrontContract', NEXT_PUBLIC_STOREFRONT_CONTRACT)
    .replace('0xNFTContractStorefront', NEXT_PUBLIC_NON_FUNGIBLE_TOKEN);
}

export default checkHash;
