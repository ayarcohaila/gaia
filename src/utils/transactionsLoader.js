import { createHash } from 'crypto';
import hashes from './transactionsHashes';
import { isDapper } from '../utils/currencyCheck';

export const loadTransaction = async transaction => {
  const result = await loadScript(transaction);
  const hashScript = createHash('sha256').update(result).digest('hex');
  let matches = false;
  if (isDapper) {
    matches = hashes[transaction] === hashScript;
    return { transaction, transactionScript: result, hashScript, matches };
  }
  return { transaction, transactionScript: result, hashScript };
};

export const loadAllTransactions = async () => {
  return Object.keys(hashes)
    .filter(transaction => (isDapper ? !transaction.endsWith('_flowtoken') : true))
    .map(transaction => loadTransaction(transaction));
};

const loadScript = async transaction => {
  return transaction
    .replace('accessNode.api', process.env.NEXT_PUBLIC_ACCESS_NODE)
    .replace('0xFungibleToken', process.env.NEXT_PUBLIC_FUNGIBLE_TOKEN)
    .replace('0xFlowToken', process.env.NEXT_PUBLIC_FLOW_TOKEN)
    .replace('0xFUSDContract', process.env.NEXT_PUBLIC_FUSD)
    .replace('0xProfile', process.env.NEXT_PUBLIC_PROFILE_CONTRACT)
    .replace('0xNFTInterface', process.env.NEXT_PUBLIC_NFT_INTERFACE)
    .replace('0xNFTContract', process.env.NEXT_PUBLIC_NFT_CONTRACT)
    .replace('0xDapperUtilityCoin', process.env.NEXT_PUBLIC_DAPPER_UTILITY_COIN)
    .replace('0xGaiaContract', process.env.NEXT_PUBLIC_GAIA_CONTRACT)
    .replace('0xStorefrontContract', process.env.NEXT_PUBLIC_STOREFRONT_CONTRACT)
    .replace('0xNFTContractStorefront', process.env.NEXT_PUBLIC_NON_FUNGIBLE_TOKEN);
};

export default { loadTransaction, loadAllTransactions };
