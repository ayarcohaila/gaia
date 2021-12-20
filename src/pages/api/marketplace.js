import { gqlClient } from '~/config/apollo-client';
import { GET_MARKETPLACE_NFTS } from '~/store/server/queries';

export default async function handler(req, res) {
  try {
    const { nft } = await gqlClient.request(GET_MARKETPLACE_NFTS, {
      marketPlaceAddress: process.env.NEXT_PUBLIC_MARKET_OWNER,
      price: req?.body?.price,
      isForSale: req?.body?.isForSale,
      transactionStatus: req?.body?.transactionStatus,
      collections: req?.body?.collections.length ? req?.body?.collections : [{}],
      properties: req?.body?.properties.length ? req?.body?.properties : [{}],
      orderUpdate: req?.body?.orderUpdate
    });
    res.status(200).json({ nfts: nft });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't query NFT List` });
  }
}
