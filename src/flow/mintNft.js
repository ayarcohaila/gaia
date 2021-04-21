import { fcl, t } from '../config/config';

const MINT_NFT_TX = fcl.cdc`
import NonFungibleToken from 0xNFTInterface
import Assets from 0xNFTContract

// This transction uses the NFTMinter resource to mint a new NFT.
//
// It must be run with the account that has the minter resource
// stored at path /storage/NFTMinter.

transaction(recipient: Address, templateID: UInt64, name: String, description: String, imgURL: String) {
    
    // local variable for storing the minter reference
    let minter: &Assets.NFTMinter

    prepare(signer: AuthAccount) {
        // borrow a reference to the NFTMinter resource in storage
        self.minter = signer.borrow<&Assets.NFTMinter>(from: Assets.MinterStoragePath)
            ?? panic("Could not borrow a reference to the NFT minter")
    }

    execute {
        // get the public account object for the recipient
        let recipientAccount = getAccount(recipient)

        // borrow the recipient's public NFT collection reference
        let receiver = recipientAccount
            .getCapability(Assets.CollectionPublicPath)!
            .borrow<&{NonFungibleToken.CollectionPublic}>()
            ?? panic("Could not get receiver reference to the NFT Collection")

        // mint the NFT and deposit it to the recipient's collection
        self.minter.mintNFT(recipient: receiver, templateID: templateID, name: name, description: description, imgURL: imgURL)
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
        fcl.authorizations([fcl.authz]),
        fcl.args([
          fcl.arg(address, t.Address),
          fcl.arg(templateID, t.UInt64),
          fcl.arg(name, t.String),
          fcl.arg(description, t.String),
          fcl.arg(imgURL, t.String)
        ]),
        fcl.limit(35)
      ])
      .then(fcl.decode);
    return fcl.tx(txId);
  } catch (error) {
    console.warn('ERROR', error);
  }
}
