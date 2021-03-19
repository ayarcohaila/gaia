import { fcl, t } from '../config/config';

const LIST_NFTS_SCRIPT = fcl.cdc`
  import Assets from 0xNFTContract
  import AssetsMarket from 0xNFTMarket

  pub struct AssetVO {
    pub let id: UInt64
    pub let isCompleted: Bool
    pub let price: UFix64
    pub let owner: Address
  
    init(id: UInt64, isCompleted: Bool, price: UFix64, owner: Address) {
      self.id = id
      self.isCompleted = isCompleted
      self.price = price
      self.owner = owner
    }
  }

  pub fun main(address: Address): [AssetVO] {
        
    let colectionRef = getAccount(address)
        .getCapability<&AssetsMarket.Collection{AssetsMarket.CollectionPublic}>(AssetsMarket.CollectionPublicPath).borrow()
        ?? panic("Could not borrow capability from public collection")
    
    if(colectionRef != nil){
        let ids = colectionRef.getSaleOfferIDs()
        let assets: [AssetVO] = []

        for assetID in ids {
            let sale = colectionRef.borrowSaleAsset(saleAssetID: assetID)!
            let a = AssetVO(id: sale.saleAssetID, isCompleted: sale.saleCompleted, price: sale.salePrice, owner: sale.saleOwner)
            assets.append(a)
        }

        return assets
    }
    
    
    return []
  }
`;

export async function getSales(address) {
  try {
    const r = await fcl
      .send([fcl.script(LIST_NFTS_SCRIPT), fcl.args([fcl.arg(address, t.Address)])])
      .then(fcl.decode);
    return r;
  } catch (error) {
    return [];
  }
}
