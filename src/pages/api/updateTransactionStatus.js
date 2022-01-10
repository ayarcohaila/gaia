import { gqlClient } from '~/config/apolloClient';
import { UPDATE_TRANSACTION_STATUS } from '~/store/server/mutations';

export default async function handler(req, res) {
  try {
    const transactionStatus = await gqlClient.request(UPDATE_TRANSACTION_STATUS, {
      filters: req?.body?.filters
    });
    res.status(200).json({ transactionStatus });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't update NFT` });
  }
}
