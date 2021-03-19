import { fcl } from '../config/config';

const TX = fcl.cdc`
import Profile from 0xProfile
import FungibleToken from 0xFungibleToken
import NonFungibleToken from 0xNFTInterface
import FlowToken from 0xFlowToken
import Assets from 0xNFTContract
import AssetsMarket from 0xNFTMarket

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

        // Init Assets Collection
        if account.borrow<&Assets.Collection>(from: Assets.CollectionStoragePath) == nil {

            // create a new empty collection
            let collection <- Assets.createEmptyCollection()

            log("Collection created for account")

            // save it to the account
            account.save(<-collection, to: Assets.CollectionStoragePath)

            // create a public capability for the collection
            account.link<&Assets.Collection{NonFungibleToken.CollectionPublic, Assets.AssetsCollectionPublic}>(Assets.CollectionPublicPath, target: Assets.CollectionStoragePath)
        
            // create a public capability for market collection
            account.link<&Assets.Collection{NonFungibleToken.Provider}>(/private/AssetsCollectionProvider, target: Assets.CollectionStoragePath)

            log("Capability created")

        }

        // Init Assets Market collection
        if account.borrow<&AssetsMarket.Collection>(from: AssetsMarket.CollectionStoragePath) == nil {

            // create a new empty collection
            let collection <- AssetsMarket.createEmptyCollection() as! @AssetsMarket.Collection
            
            // save it to the account
            account.save(<-collection, to: AssetsMarket.CollectionStoragePath)

            // create a public capability for market the collection
            account.link<&AssetsMarket.Collection{AssetsMarket.CollectionPublic}>(AssetsMarket.CollectionPublicPath, target: AssetsMarket.CollectionStoragePath)
        
            // create a public capability for the collection
            if !account.getCapability<&Assets.Collection{NonFungibleToken.Provider}>(/private/AssetsCollectionProvider)!.check() {
              account.link<&Assets.Collection{NonFungibleToken.Provider}>(/private/AssetsCollectionProvider, target: Assets.CollectionStoragePath)
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
