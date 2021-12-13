import { fcl, t } from '../config/config';

export async function buy(tx, listingResourceID, ownerAddress, expectedPrice, buyerAddress) {
  if (listingResourceID == null)
    throw new Error(
      'buy(listingResourceID, ownerAddress, expectedPrice, buyerAddress) -- listingResourceID required'
    );
  if (ownerAddress == null)
    throw new Error(
      'buy(listingResourceID, ownerAddress, expectedPrice, buyerAddress) -- ownerAddress required'
    );
  if (expectedPrice == null)
    throw new Error(
      'buy(listingResourceID, ownerAddress, expectedPrice, buyerAddress) -- expectedPrice required'
    );
  if (buyerAddress == null)
    throw new Error(
      'buy(listingResourceID, ownerAddress, expectedPrice, buyerAddress) -- buyerAddress required'
    );
  try {
    const txId = await fcl
      .send([
        fcl.transaction(tx),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.args([
          fcl.arg(listingResourceID, t.UInt64),
          fcl.arg(ownerAddress, t.Address),
          fcl.arg(expectedPrice, t.UFix64),
          fcl.arg(buyerAddress, t.Address)
        ]),
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
