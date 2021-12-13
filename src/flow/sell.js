/* eslint-disable no-console */

import { fcl, t } from '../config/config';

const STOREFRONT_ADDRESS = process.env.NEXT_PUBLIC_STOREFRONT_ADDRESS;

export async function sellItem(tx, saleItemID, saleItemPrice, collectionSetId) {
  if (saleItemID == null)
    throw new Error('sellItem(saleItemID, saleItemPrice) -- saleItemID required');
  if (saleItemPrice == null)
    throw new Error('sellItem(saleItemID, saleItemPrice) -- saleItemPrice required');
  const correctSalePrice = Number(saleItemPrice).toFixed(8);
  try {
    const txId = await fcl
      .send([
        fcl.transaction(tx),
        //salePrice must have 1. something , INT are not accepted by this transaction
        fcl.args([
          fcl.arg(Number(saleItemID), t.UInt64),
          fcl.arg(Number(correctSalePrice).toFixed(8), t.UFix64),
          fcl.arg(STOREFRONT_ADDRESS, t.Address),
          fcl.arg(Number(collectionSetId), t.UInt64)
        ]),
        fcl.proposer(fcl.authz),
        fcl.payer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(1000)
      ])
      .then(async a => {
        let response = await fcl.decode(a);
        return response;
      });

    const sealedTx = await fcl.tx(txId).onceSealed();
    return {
      txId,
      sealedTx
    };
  } catch (err) {
    console.error(err);
    throw new Error(err);
  }
}
