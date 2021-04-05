/* eslint-disable no-console */
import { fcl, t } from '../config/config';

const TRANSFER_NFT_TX = fcl.cdc`
import NonFungibleToken from 0xNFTInterface
import Assets from 0xNFTContract

pub fun main(address: Address, assetID: UInt64): &Assets.NFT? {

  // Get account by given address
  let account = getAccount(address)

  // Borrow a reference to the account asset collection
  let collection = account.getCapability(Assets.CollectionPublicPath)!
      .borrow<&Assets.Collection{Assets.AssetsCollectionPublic}>()
      ?? panic("Could not borrow a collection reference")
  
  // Borrow a reference to the given asset id and return data
  return collection.borrowAsset(id: assetID)
}
`;

export async function getAsset(address, assetID) {
  if (Number.isNaN(assetID)) return;
  return fcl
    .send([
      fcl.script(TRANSFER_NFT_TX),
      fcl.args([fcl.arg(address, t.Address), fcl.arg(assetID, t.UInt64)])
    ])
    .then(fcl.decode);
}
