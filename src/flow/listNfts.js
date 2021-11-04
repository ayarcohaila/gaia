import { fcl, t } from '../config/config';

const LIST_NFTS_SCRIPT = fcl.cdc`
        import NonFungibleToken from 0xNFTInterface
        import Gaia from 0xGaiaContract
        
        // Print the NFTs owned by account.
        // pub fun main(address: Address): [UInt64] {

        pub struct NFTData {
          pub let id: String?
          pub let name: String?
          pub let imageURL: String
          
          init(id: String?, name: String?, imageURL: String) {
              self.id = id
              self.name = name
              self.imageURL = imageURL
          }
        }

        pub fun main(address: Address): [NFTData] {
            let account = getAccount(address)
        
            let collectionRef = account.getCapability(Gaia.CollectionPublicPath)
                                    .borrow<&{Gaia.CollectionPublic}>()!
        
            let ids = collectionRef.getIDs()
            let assets: [NFTData] = []
        
            for assetID in ids {

              let asset = collectionRef.borrowGaiaNFT(id: assetID)!
              let templateMetadata = Gaia.getTemplateMetaData(templateID: asset.data.templateID)
              let id = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "id")
              let title = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "title")
              let imageURL = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "img")!
              
              let nftData = NFTData(
                id: id,
                name: title,
                imageURL: "https://ipfs.fleek.co/ipfs/".concat(imageURL.slice(from: 7, upTo: imageURL.length))
              )
                
              assets.append(nftData)
                
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
