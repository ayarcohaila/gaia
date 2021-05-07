import { fcl } from '../config/config';

const INIT_PROFILE_TX = fcl.cdc`
import Profile from 0xProfile

transaction {
  // We want the accounts address for later so we can verify if the account was initialized properly
  let address: Address

  prepare(account: AuthAccount) {
    // save the address for the post check
    self.address = account.address

    // Only want to initialize the account if it hasnt already been initialized
    if (!Profile.check(self.address)) {
      // This creates and stores the Profile in the users account
      account.save(<- Profile.new(), to: Profile.privatePath)

      // This creates the public capability that lets applications read the profiles info
      account.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
    }
    // First, check to see if a moment collection already exists
    if account.borrow<&FlowAssets.Collection>(from: FlowAssets.CollectionStoragePath) == nil {
      // create a new FlowAssets Collection
      let collection <- FlowAssets.createEmptyCollection() as! @FlowAssets.Collection
      // Put the new Collection in storage
      account.save(<-collection, to: FlowAssets.CollectionStoragePath)
      // create a public capability for the collection
      account.link<&{FlowAssets.FlowAssetsCollectionPublic}>(FlowAssets.CollectionPublicPath, target: FlowAssets.CollectionStoragePath)
  }
  }

  // verify the account has been initialized
  post {
    Profile.check(self.address): "Account was not initialized"
  }
}
`;

export async function initProfile() {
  const txId = await fcl
    .send([
      fcl.transaction(INIT_PROFILE_TX),
      fcl.payer(fcl.authz), // current user is responsible for paying for the transaction
      fcl.proposer(fcl.authz), // current user acting as the nonce
      fcl.authorizations([fcl.authz]), // current user will be first AuthAccount
      fcl.limit(35) // set the compute limit
    ])
    .then(fcl.decode);

  return fcl.tx(txId).onceSealed();
}
