import { publicMintAddress, fcl, t } from '../config/config';

const MINT_NFT_TX = fcl.cdc`
import NonFungibleToken from 0xNFTInterface
import Assets from 0xNFTContract
transaction(minterAddress: Address, recipient: Address, templateID: UInt64, name: String, description: String, imgURL: String) {
  execute {
    let minter = getAccount(minterAddress)
      .getCapability<&Assets.NFTMinter>(Assets.MinterPublicPath).borrow()
      ?? panic("Could not borrow capability from public collection")
    
    // get the public account object for the recipient
    let recipientAccount = getAccount(recipient)
    // borrow the recipient's public NFT collection reference
    let receiver = recipientAccount
      .getCapability(Assets.CollectionPublicPath)!
      .borrow<&{NonFungibleToken.CollectionPublic}>()
      ?? panic("Could not get receiver reference to the NFT Collection")
    // mint the NFT and deposit it to the recipient's collection
    minter.mintNFT(recipient: receiver, templateID: templateID, name: name, description: description, imgURL: imgURL)
  }
}
`;

export async function mintNft(address, templateID, name, description, imgURL) {
  try {
    const txId = await fcl
      .send([
        fcl.transaction(MINT_NFT_TX),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.args([
          fcl.arg(publicMintAddress, t.Address),
          fcl.arg(address, t.Address),
          fcl.arg(templateID, t.UInt64),
          fcl.arg(name, t.String),
          fcl.arg(description, t.String),
          fcl.arg(imgURL, t.String)
        ]),
        fcl.limit(35)
      ])
      .then(fcl.decode);
    return fcl.tx(txId).onceSealed();
  } catch (error) {
    console.warn('ERROR', error);
  }
}
