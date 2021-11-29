import { gqlClient } from '~/config/apollo-client';
import { GET_MARKETPLACE_NFTS } from '~/store/server/queries';

export default async function handler(req, res) {
  try {
    const { nft } = await gqlClient.request(GET_MARKETPLACE_NFTS);
    res.status(200).json({ nfts: nft });
  } catch (e) {
    res.status(500).json({ error: `Can't query NFT List` });
  }
}
