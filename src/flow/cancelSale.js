import { fcl, t } from '../config/config';

const CANCEL_SALE_TX = fcl.cdc`
import NFTStorefront from 0xStorefrontContract

transaction(listingResourceID: UInt64) {
    let storefront: &NFTStorefront.Storefront{NFTStorefront.StorefrontManager}

    prepare(acct: AuthAccount) {
        self.storefront = acct.borrow<&NFTStorefront.Storefront{NFTStorefront.StorefrontManager}>(from: NFTStorefront.StorefrontStoragePath)
            ?? panic("Missing or mis-typed NFTStorefront.Storefront")
    }

    execute {
        self.storefront.removeListing(listingResourceID: listingResourceID)
    }
}
`;

export async function cancelSale(listingResourceID) {
  try {
    const txId = await fcl
      .send([
        fcl.transaction(CANCEL_SALE_TX),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.args([fcl.arg(Number(listingResourceID), t.UInt64)]),
        fcl.limit(100)
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
