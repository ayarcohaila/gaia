/* eslint-disable no-console */
import { fcl, t } from '../config/config';

const GET_SALE_OFFER = fcl.cdc`
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

pub fun main(address: Address, assetID: UInt64): [AssetVO] {
        
    let colectionRef = getAccount(address)
        .getCapability<&AssetsMarket.Collection{AssetsMarket.CollectionPublic}>(AssetsMarket.CollectionPublicPath).borrow()
        ?? panic("Could not borrow capability from public collection")
    
    if(colectionRef != nil){
        let ids = colectionRef.getSaleOfferIDs()
        let assets: [AssetVO] = []

        for marketAssetID in ids {
            if(marketAssetID == assetID){
              let sale = colectionRef.borrowSaleAsset(saleAssetID: marketAssetID)!
              let a = AssetVO(id: sale.saleAssetID, isCompleted: sale.saleCompleted, price: sale.salePrice, owner: sale.saleOwner)
              assets.append(a)
              return assets
            }
            
        }

        
    }
    
    
    return []
  }
`;

export async function getSaleOffer(address, saleID) {
  try {
    const r = await fcl
      .send([
        fcl.script(GET_SALE_OFFER),
        fcl.args([fcl.arg(address, t.Address), fcl.arg(saleID, t.UInt64)])
      ])
      .then(fcl.decode);
    return r;
  } catch (error) {
    console.log(error);
    return [];
  }
}
