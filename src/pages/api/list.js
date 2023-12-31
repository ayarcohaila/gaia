const fcl = require('@onflow/fcl');

const ACCESS_NODE = process.env.NEXT_PUBLIC_ACCESS_NODE;
const ALCHEMY_API_KEY = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY;
const GAIA_CONTRACT = process.env.NEXT_PUBLIC_GAIA_CONTRACT;
const BALLERZ_SET_ID = process.env.NEXT_PUBLIC_BALLERZ_SETID;
const BRYSON_SET_ID = process.env.NEXT_PUBLIC_BRYSON_SETID;

import { COLLECTION_LIST_CONFIG } from '../../../collections_setup';

const listBallerzTx = `import NonFungibleToken from 0xNFTInterface
import Gaia from 0xGaiaContract
// Print the NFTs owned by account.
pub struct NFTData {
  pub let assetID: UInt64
  pub let setID: UInt64
  pub let id: String?
  pub let name: String?
  pub let imageURL: String

  init(assetID: UInt64, setID: UInt64, id: String?, name: String?, imageURL: String) {
      self.assetID = assetID
      self.setID = setID
      self.id = id
      self.name = name
      self.imageURL = imageURL
  }
}
pub fun main(address: Address, setID: UInt64): [NFTData] {
    let account = getAccount(address)
    let assets: [NFTData] = []
    let accountSetup = account
      .getCapability<&{Gaia.CollectionPublic}>(Gaia.CollectionPublicPath)
      .check()
    if accountSetup {
      let collectionRef = account.getCapability(Gaia.CollectionPublicPath)
                              .borrow<&{Gaia.CollectionPublic}>()!

      let ids = collectionRef.getIDs()

      for assetID in ids {
        let asset = collectionRef.borrowGaiaNFT(id: assetID)!
        if asset.data.setID == setID {
          let templateMetadata = Gaia.getTemplateMetaData(templateID: asset.data.templateID)
          let id = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "id")
          let title = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "title")
          let imageURL = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "img")!

          let nftData = NFTData(
            assetID: assetID,
            setID: asset.data.setID,
            id: id,
            name: title,
            imageURL: "https://images.ongaia.com/ipfs/".concat(imageURL.slice(from: 7, upTo: imageURL.length))
          )

          assets.append(nftData)
        }
      }
    }
    return assets
}`;

fcl
  .config()
  .put('accessNode.api', ACCESS_NODE)
  .put('grpc.metadata', { api_key: ALCHEMY_API_KEY })
  .put('0xGaiaContract', GAIA_CONTRACT);

const listBallerzNFTs = async (addr, setID) => {
  return fcl.query({
    cadence: listBallerzTx,
    args: (arg, t) => [arg(addr, t.Address), arg(setID, t.UInt64)]
  });
};

const listBrysonTx = `import NonFungibleToken from 0xNFTInterface
import Gaia from 0xGaiaContract

// Print the NFTs owned by account.

pub struct NFTData {
  pub let id: UInt64
  pub let name: String?
  pub let imageURL: String
  pub let videoURL: String

  init(id: UInt64, name: String?, imageURL: String, videoURL: String) {
      self.id = id
      self.name = name
      self.imageURL = imageURL
      self.videoURL = videoURL
  }
}

pub fun main(address: Address, setID: UInt64): [NFTData] {
    let account = getAccount(address)
    let assets: [NFTData] = []
    let accountSetup = account
      .getCapability<&{Gaia.CollectionPublic}>(Gaia.CollectionPublicPath)
      .check()

    if accountSetup {
      let collectionRef = account.getCapability(Gaia.CollectionPublicPath)
                              .borrow<&{Gaia.CollectionPublic}>()!

      let ids = collectionRef.getIDs()

      for assetID in ids {

        let asset = collectionRef.borrowGaiaNFT(id: assetID)!

        if asset.data.setID == setID {
          let templateMetadata = Gaia.getTemplateMetaData(templateID: asset.data.templateID)
          let id = asset.data.mintNumber!
          let title = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "title")
          let imageURL = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "img")!
          let videoURL = Gaia.getTemplateMetaDataByField(templateID: asset.data.templateID, field: "video")!

          let nftData = NFTData(
            id: id,
            name: title,
            imageURL: "https://images.ongaia.com/ipfs/".concat(imageURL.slice(from: 7, upTo: imageURL.length)),
            videoURL: "https://images.ongaia.com/ipfs/".concat(videoURL.slice(from: 7, upTo: videoURL.length))
          )

          assets.append(nftData)
        }
      }
    }
    return assets
}`;

const listBrysonNFTs = async (addr, setID) => {
  return fcl.query({
    cadence: listBrysonTx,
    args: (arg, t) => [arg(addr, t.Address), arg(setID, t.UInt64)]
  });
};

export default async function handler(req, res) {
  const address = req.query.address;
  if (address === undefined) {
    res.status(400).json({ error: 'missing address' });
  } else {
    try {
      const ballerzList = await listBallerzNFTs(address, parseInt(BALLERZ_SET_ID, 10));
      const brysonList = await listBrysonNFTs(address, parseInt(BRYSON_SET_ID, 10));
      const parsedBallerzList = ballerzList.map((nft, index) =>
        COLLECTION_LIST_CONFIG.ballerz.mystery
          ? {
              id: index,
              imageURL: '/images/mystery-nft.gif',
              name: 'BALLER #????',
              mystery: true
            }
          : { ...nft }
      );
      const parsedBrysonList = brysonList.map((nft, index) =>
        COLLECTION_LIST_CONFIG.bryson.mystery
          ? {
              id: index,
              imageURL: '/images/mystery-nft.gif',
              name: 'BRYSON #????',
              mystery: true
            }
          : { ...nft, name: `${nft.name} #${nft.id}` }
      );

      res.status(200).json({ ballerz: parsedBallerzList, bryson: parsedBrysonList });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: `Can't query NFT List` });
    }
  }
}
