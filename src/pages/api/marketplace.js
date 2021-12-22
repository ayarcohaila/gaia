import { gqlClient } from '~/config/apollo-client';
import { GET_MARKETPLACE_NFTS_COUNT, GET_MARKETPLACE_OFFERS } from '~/store/server/queries';

export default async function handler(req, res) {
  try {
    const { nft_sale_offer } = await gqlClient.request(GET_MARKETPLACE_OFFERS, {
      marketPlaceAddress: process.env.NEXT_PUBLIC_MARKET_OWNER,
      price: req?.body?.price,
      is_for_sale: req?.body?.isForSale,
      collections: req?.body?.collections.length ? req?.body?.collections : [{}],
      properties: req?.body?.properties.length ? req?.body?.properties : [{}],
      offset: req?.body?.offset,
      orderBy: req?.body?.orderBy
    });
    const nft = nft_sale_offer.map(offer => {
      return {
        ...offer.nft,
        sale_offers: [
          {
            parsed_price: offer.parsed_price,
            updated_at: offer.updated_at,
            listing_resource_id: offer.listing_resource_id,
            price: offer.price,
            status: offer.status
          }
        ]
      };
    });

    const { nft_sale_offer_aggregate } = await gqlClient.request(GET_MARKETPLACE_NFTS_COUNT, {
      marketPlaceAddress: process.env.NEXT_PUBLIC_MARKET_OWNER,
      price: req?.body?.price,
      is_for_sale: req?.body?.isForSale,
      collections: req?.body?.collections.length ? req?.body?.collections : [{}],
      properties: req?.body?.properties.length ? req?.body?.properties : [{}]
    });

    const aggregateIds = [];

    nft_sale_offer_aggregate.nodes.filter(nft_item => {
      if (!aggregateIds.includes(nft_item.nft.asset_id)) {
        aggregateIds.push(nft_item.nft.asset_id);
        return nft_item;
      }
    });

    res.status(200).json({ nfts: nft, marketCount: aggregateIds.length });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't query NFT List` });
  }
}
