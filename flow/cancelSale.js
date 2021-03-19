import { fcl, t } from '../config/config';

const CANCEL_SALE_TX = fcl.cdc`
import AssetsMarket from 0xNFTMarket

transaction(saleItemID: UInt64) {
    let marketCollection: &AssetsMarket.Collection

    prepare(signer: AuthAccount) {
        self.marketCollection = signer.borrow<&AssetsMarket.Collection>(from: AssetsMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed AssetsMarket Collection")
    }

    execute {
        let offer <-self.marketCollection.remove(saleItemID: saleItemID)
        destroy offer
    }
}
`;

export async function buy(saleItemID) {
  const txId = await fcl
    .send([
      fcl.transaction(CANCEL_SALE_TX),
      fcl.payer(fcl.authz),
      fcl.proposer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.args([fcl.arg(saleItemID, t.UInt64)]),
      fcl.limit(35)
    ])
    .then(fcl.decode);
  return fcl.tx(txId).onceSealed();
}
