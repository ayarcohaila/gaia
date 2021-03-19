import { fcl, t } from '../config/config';

const BUY_NFT_TX = fcl.cdc`
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import Assets from 0xNFTContract
import FlowToken from 0xFlowToken
import AssetsMarket from 0xNFTMarket

transaction(saleAssetID: UInt64, address: Address) {
    let paymentVault: @FungibleToken.Vault
    let AssetsCollection: &Assets.Collection{NonFungibleToken.Receiver}
    let marketCollection: &AssetsMarket.Collection{AssetsMarket.CollectionPublic}

    prepare(signer: AuthAccount) {
        let FlowTokenReceiverPublicPath = /public/flowTokenReceiver
        let FlowTokenVaultStoragePath = /storage/flowTokenVault

        self.marketCollection = getAccount(address)
            .getCapability<&AssetsMarket.Collection{AssetsMarket.CollectionPublic}>(
                AssetsMarket.CollectionPublicPath
            )!
            .borrow()
            ?? panic("Could not borrow market collection from market address")

        let saleItem = self.marketCollection.borrowSaleAsset(saleAssetID: saleAssetID)
                    ?? panic("No item with that ID")
        let price = saleItem.salePrice

        let mainFlowTokenVault = signer.borrow<&FlowToken.Vault>(from: FlowTokenVaultStoragePath)
            ?? panic("Cannot borrow FlowToken vault from acct storage")
        self.paymentVault <- mainFlowTokenVault.withdraw(amount: price)

        self.AssetsCollection = signer.borrow<&Assets.Collection{NonFungibleToken.Receiver}>(
            from: Assets.CollectionStoragePath
        ) ?? panic("Cannot borrow Assets collection receiver from acct")
    }

    execute {
        self.marketCollection.purchase(
            saleAssetID: saleAssetID,
            buyerCollection: self.AssetsCollection,
            buyerPayment: <- self.paymentVault
        )
    }
}
`;

export async function buy(saleAssetID, address) {
  const txId = await fcl
    .send([
      fcl.transaction(BUY_NFT_TX),
      fcl.payer(fcl.authz),
      fcl.proposer(fcl.authz),
      fcl.authorizations([fcl.authz]),
      fcl.args([fcl.arg(saleAssetID, t.UInt64), fcl.arg(address, t.Address)]),
      fcl.limit(100)
    ])
    .then(fcl.decode);
  return fcl.tx(txId).onceSealed();
}
