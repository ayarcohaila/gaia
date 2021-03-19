import { fcl, t } from '../config/config';

const LIST_NFTS_SCRIPT = fcl.cdc`
import NonFungibleToken from 0xNFTInterface
import Assets from 0xNFTContract

// Print the NFTs owned by account.
// pub fun main(address: Address): [UInt64] {
pub fun main(address: Address): [&Assets.NFT] {
    let account = getAccount(address)

    let collectionRef = account.getCapability(Assets.CollectionPublicPath)!.borrow<&Assets.Collection{Assets.AssetsCollectionPublic}>()
        ?? panic("Could not borrow capability from public collection")

    // return collectionRef.getIDs()
    let ids = collectionRef.getIDs()
    let assets: [&Assets.NFT] = []

    for assetID in ids {
        let asset = collectionRef.borrowAsset(id: assetID)!
        assets.append(asset)
    }

    return assets
}
`;

export async function listNfts(address) {
  if (address == null) throw new Error('listNfts(address) -- address required');
  return fcl
    .send([fcl.script(LIST_NFTS_SCRIPT), fcl.args([fcl.arg(address, t.Address)])])
    .then(fcl.decode);
}
