import { gqlClient } from '~/config/apollo-client';
import { GET_COLLECTION_FLOOR_VALUE_BY_ID } from '~/store/server/queries';

export default async function handler(req, res) {
  try {
    const data = await gqlClient.request(GET_COLLECTION_FLOOR_VALUE_BY_ID, {
      collection_id: req?.body?.collectionId,
      marketPlaceAddress: process.env.NEXT_PUBLIC_MARKET_OWNER
    });
    res.status(200).json({
      floorPrice: data.nft_sale_offer.length > 0 ? data?.nft_sale_offer[0].parsed_price : 0
    });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't get the floor value of this collection` });
  }
}
