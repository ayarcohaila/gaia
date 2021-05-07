import { fcl } from '../config/config';

const TX = fcl.cdc`
import Profile from 0xProfile
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import FlowToken from 0xFlowToken
import FlowAssets from 0xNFTContract
import FlowAssetsMarket from 0xNFTMarket

// This transaction configures an account to hold assets.
transaction {

    let address: Address
    let flowVault: Capability<&FlowToken.Vault{FungibleToken.Receiver}>
    prepare(account: AuthAccount) {
      let FlowTokenReceiverPublicPath = /public/flowTokenReceiver
      let FlowTokenVaultStoragePath = /storage/flowTokenVault
      
      //INITIALIZING PARAMS
      self.address = account.address
        
        // Init Profile
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

        // Init FlowAssets Market collection
        if account.borrow<&FlowAssetsMarket.Collection>(from: FlowAssetsMarket.CollectionStoragePath) == nil {

            // create a new empty collection
            let collection <- FlowAssetsMarket.createEmptyCollection() as! @FlowAssetsMarket.Collection
            
            // save it to the account
            account.save(<-collection, to: FlowAssetsMarket.CollectionStoragePath)

            // create a public capability for market the collection
            account.link<&FlowAssetsMarket.Collection{FlowAssetsMarket.CollectionPublic}>(FlowAssetsMarket.CollectionPublicPath, target: FlowAssetsMarket.CollectionStoragePath)
        
            // create a public capability for the collection
            if !account.getCapability<&FlowAssets.Collection{NonFungibleToken.Provider}>(/private/AssetsCollectionProvider)!.check() {
              account.link<&FlowAssets.Collection{NonFungibleToken.Provider}>(/private/AssetsCollectionProvider, target: FlowAssets.CollectionStoragePath)
            }
  
          }

        //Init Flow Token Balance
        if account.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault) == nil {
          
          // Create a new flowToken Vault and put it in storage
          account.save(<-FlowToken.createEmptyVault(), to: /storage/flowTokenVault)

          // Create a public capability to the Vault that only exposes
          // the deposit function through the Receiver interface
          account.link<&FlowToken.Vault{FungibleToken.Receiver}>(
              /public/flowTokenReceiver,
              target: /storage/flowTokenVault
          )

          // Create a public capability to the Vault that only exposes
          // the balance field through the Balance interface
          account.link<&FlowToken.Vault{FungibleToken.Balance}>(
              /public/flowTokenBalance,
              target: /storage/flowTokenVault
          )
      }
        self.flowVault = account.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)!

        assert(self.flowVault.borrow() != nil, message: "Missing or mis-typed FlowToken receiver")

    }

    // verify the account has been initialized
    post {
      Profile.check(self.address): "Account was not initialized"
    }
}
`;

export async function setupAccount() {
  const txId = await fcl
    .send([
      fcl.transaction(TX),
      fcl.payer(fcl.authz), // current user is responsible for paying for the transaction
      fcl.proposer(fcl.authz), // current user acting as the nonce
      fcl.authorizations([fcl.authz]), // current user will be first AuthAccount
      fcl.limit(100) // set the compute limit
    ])
    .then(fcl.decode);
  return fcl.tx(txId).onceSealed();
}
