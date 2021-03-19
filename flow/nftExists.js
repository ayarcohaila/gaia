import { fcl } from '../config/config';

const NFT_EXISTS_TX = fcl.cdc`
import Assets from 0xNFTContract
  
// This transaction checks if an NFT exists in the storage of the given account
// by trying to borrow from it
transaction {
  prepare(acct: AuthAccount) {
    if acct.borrow<&Assets.Asset>(from: Assets.CollectionStoragePath) != nil {
      log("The token exists!")
    } else {
      log("No token found!")
    }
  }
}
`;

export async function nftExists() {
  const txId = await fcl
    .send([
      fcl.transaction(NFT_EXISTS_TX),
      fcl.payer(fcl.authz), // current user is responsible for paying for the transaction
      fcl.proposer(fcl.authz), // current user acting as the nonce
      fcl.authorizations([fcl.authz]), // current user will be first AuthAccount
      fcl.limit(35) // set the compute limit
    ])
    .then(fcl.decode);

  return fcl.tx(txId).onceSealed();
}
