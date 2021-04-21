import { fcl, t } from '../config/config';

const CANCEL_SALE_TX = fcl.cdc`
import FlowAssetsMarket from 0xNFTMarket

transaction(saleAssetID: UInt64) {
    let marketCollection: &FlowAssetsMarket.Collection

    prepare(signer: AuthAccount) {
        self.marketCollection = signer.borrow<&FlowAssetsMarket.Collection>(from: FlowAssetsMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed FlowAssetsMarket Collection")
    }

    execute {
        let offer <-self.marketCollection.remove(saleAssetID: saleAssetID)
        destroy offer
    }
}
`;

export async function cancelSale(saleAssetID) {
  const txId = await fcl
    .send([
      fcl.transaction(CANCEL_SALE_TX),
      fcl.payer(fcl.authz),
      fcl.proposer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.args([fcl.arg(saleAssetID, t.UInt64)]),
      fcl.limit(35)
    ])
    .then(fcl.decode);
  return fcl.tx(txId).onceSealed();
}
