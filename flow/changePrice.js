import { fcl, t } from '../config/config';

const CHANGE_PRICE_TX = `
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import Assets from 0xNFTContract
import FlowToken from 0xFlowToken
import AssetsMarket from 0xNFTMarket

transaction(address: Address, saleAssetID: UInt64, newPrice: UFix64) {
    let marketCollection: &AssetsMarket.Collection{AssetsMarket.CollectionPublic}

    prepare(signer: AuthAccount) {

        self.marketCollection = getAccount(address)
            .getCapability<&AssetsMarket.Collection{AssetsMarket.CollectionPublic}>(
                AssetsMarket.CollectionPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow market collection from market address")

        let saleItem = self.marketCollection.borrowSaleAsset(saleAssetID: saleAssetID)
                    ?? panic("No item with that ID")
        let price = saleItem.salePrice

        saleItem.setPrice(newPrice)

       
    }

}
`;

export async function changePrice(address, saleAssetID, newPrice) {
  const correctSalePrice = newPrice.toFixed(8);
  const txId = await fcl
    .send([
      fcl.proposer(fcl.authz),
      fcl.payer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.limit(35),
      fcl.args([
        fcl.arg(address, t.Address),
        fcl.arg(saleAssetID, t.UInt64),
        fcl.arg(correctSalePrice, t.UFix64)
      ]),
      fcl.transaction(CHANGE_PRICE_TX)
    ])
    .then(fcl.decode);

  return txId;
}
