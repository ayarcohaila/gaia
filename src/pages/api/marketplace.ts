import type { NextApiRequest, NextApiResponse } from 'next';
import { gqlClient } from '~/config/apolloClient';
import { GET_MARKETPLACE_OFFERS } from '~/store/server/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { nft, nft_aggregate } = await gqlClient.request(GET_MARKETPLACE_OFFERS, {
      marketPlaceAddress: process.env.NEXT_PUBLIC_MARKET_OWNER,
      price: req?.body?.price,
      has_sale_offers: req?.body?.isForSale,
      collections: req?.body?.collections.length ? req?.body?.collections : [{}],
      properties: req?.body?.properties,
      offset: req?.body?.offset,
      orderBy: req?.body?.orderBy,
      limit: req?.body?.limit
    });

    res.status(200).json({ nfts: nft, marketCount: nft_aggregate.aggregate.count });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't query NFT List` });
  }
}
