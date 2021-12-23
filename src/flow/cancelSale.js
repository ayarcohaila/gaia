import { fcl, t } from '../config/config';

export async function cancelSale(tx, listingResourceID) {
  try {
    const txId = await fcl
      .send([
        fcl.transaction(tx),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.args([fcl.arg(Number(listingResourceID), t.UInt64)]),
        fcl.limit(2000)
      ])
      .then(fcl.decode);

    const sealedTx = await fcl.tx(txId).onceSealed();
    return {
      txId,
      sealedTx
    };
  } catch (err) {
    console.warn(err);
    throw new Error(err);
  }
}
