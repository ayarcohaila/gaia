import { fcl, t } from '../config/config';

const CANCEL_SALE_TX = fcl.cdc`
import GaiaMarket from 0xNFTMarket

transaction(saleAssetID: UInt64) {
    let marketCollection: &GaiaMarket.Collection

    prepare(signer: AuthAccount) {
        self.marketCollection = signer.borrow<&GaiaMarket.Collection>(from: GaiaMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed GaiaMarket Collection")
    }

    execute {
        let offer <-self.marketCollection.remove(itemID: saleAssetID)
        destroy offer
    }
}
`;

export async function cancelSale(saleAssetID) {
  try {
    const txId = await fcl
      .send([
        fcl.transaction(CANCEL_SALE_TX),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.args([fcl.arg(Number(saleAssetID), t.UInt64)]),
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
