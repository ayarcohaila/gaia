import { gqlClient } from '~/config/apollo-client';
import { GET_MARKETPLACE_NFTS_COUNT, GET_MARKETPLACE_OFFERS } from '~/store/server/queries';

export default async function handler(req, res) {
  try {
    const { nft_sale_offer } = await gqlClient.request(GET_MARKETPLACE_OFFERS, {
      price: req?.body?.price,
      is_for_sale: req?.body?.isForSale,
      transaction_status: req?.body?.transactionStatus,
      collections: req?.body?.collections.length ? req?.body?.collections : [{}],
      properties: req?.body?.properties.length ? req?.body?.properties : [{}],
      order_update: req?.body?.orderUpdate,
      limit: req?.body?.limit
    });
    const ids = [];
    const nft = nft_sale_offer
      .map(offer => {
        return {
          ...offer.nft,
          sale_offers: [
            {
              updated_at: offer.updated_at,
              listing_resource_id: offer.listing_resource_id,
              price: offer.price,
              status: offer.status
            }
          ]
        };
      })
      .filter(nft_item => {
        if (!ids.includes(nft_item.asset_id)) {
          ids.push(nft_item.asset_id);
          return nft_item;
        }
      });

    const { nft_aggregate } = await gqlClient.request(GET_MARKETPLACE_NFTS_COUNT, {
      price: req?.body?.price,
      isForSale: req?.body?.isForSale,
      transactionStatus: req?.body?.transactionStatus,
      collections: req?.body?.collections.length ? req?.body?.collections : [{}],
      properties: req?.body?.properties.length ? req?.body?.properties : [{}],
      orderUpdate: req?.body?.orderUpdate
    });

    res.status(200).json({ nfts: nft, marketCount: nft_aggregate.aggregate.count });
  } catch (e) {
    console.error('error', e);
    res.status(500).json({ error: `Can't query NFT List` });
  }
}
