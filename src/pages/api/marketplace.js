import { gqlClient } from '~/config/apollo-client';
import { GET_MARKETPLACE_NFTS } from '~/store/server/queries';

export default async function handler(req, res) {
  try {
    const { nft } = await gqlClient.request(GET_MARKETPLACE_NFTS, {
      // limit: 200,
      // offset: 0,
      price: req?.body?.price,
      isForSale: req?.body?.isForSale,
      collections: req?.body?.collections.length ? req?.body?.collections : [{}],
      properties: req?.body?.properties.length ? req?.body?.properties : [{}]
    });
    res.status(200).json({ nfts: nft });
  } catch (e) {
    res.status(500).json({ error: `Can't query NFT List` });
  }
}
