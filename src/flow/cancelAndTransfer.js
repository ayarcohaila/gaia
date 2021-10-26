import { fcl, t } from '../config/config';

const CANCEL_SALE_AND_TRANSFER_TX = fcl.cdc`
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import Gaia from 0xNFTContract
import FUSD from 0xFUSDContract
import GaiaMarket from 0xNFTMarket
transaction(recipient: Address, withdrawID: UInt64) {
    let marketRef: &GaiaMarket.Collection
    let collectionRef: &Gaia.Collection
    prepare(signer: AuthAccount) {
        self.marketRef = signer.borrow<&GaiaMarket.Collection>(from: GaiaMarket.CollectionStoragePath)
            ?? panic("Missing or mis-typed GaiaMarket Collection")
            // borrow a reference to the signer's NFT collection
        self.collectionRef = signer.borrow<&Gaia.Collection>(from: Gaia.CollectionStoragePath)
            ?? panic("Could not borrow a reference to the owner's collection")
    }
    execute {
        //Get actual sales
        let saleIDs = self.marketRef.getSaleOfferIDs()
        //Check if itemID you are transferring are in the array of your sales
        let containsID = saleIDs.contains(withdrawID)
        //If it is , remove
        if(containsID) {
            let offer <- self.marketRef.remove(itemID: withdrawID)
            destroy offer;
        }
        let recipienter = getAccount(recipient)
        let depositRef = recipienter.getCapability(Gaia.CollectionPublicPath)
              .borrow<&{Gaia.CollectionPublic}>()!  
        // withdraw the NFT from the owner's collection
        let nft <- self.collectionRef.withdraw(withdrawID: withdrawID)
        // Deposit the NFT in the recipient's collection
        depositRef.deposit(token: <-nft)
    }
}
`;

export async function cancelAndTransfer(recipient, itemID) {
  try {
    const txId = await fcl
      .send([
        fcl.transaction(CANCEL_SALE_AND_TRANSFER_TX),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.args([fcl.arg(recipient, t.Address), fcl.arg(Number(itemID), t.UInt64)]),
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
