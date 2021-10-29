import { fcl, t } from '../config/config';

export async function buy(tx, listingResourceID, ownerAddress) {
  if (listingResourceID == null)
    throw new Error('buy(listingResourceID, ownerAddress) -- listingResourceID required');
  if (ownerAddress == null)
    throw new Error('buy(listingResourceID, ownerAddress) -- ownerAddress required');
  try {
    const txId = await fcl
      .send([
        fcl.transaction(tx),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.args([fcl.arg(listingResourceID, t.UInt64), fcl.arg(ownerAddress, t.Address)]),
        fcl.limit(1000)
      ])
      .then(fcl.decode);
    const sealedTx = await fcl.tx(txId).onceSealed();
    return {
      txId,
      sealedTx
    };
  } catch (err) {
    throw new Error(err);
  }
}
