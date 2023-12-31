import FungibleToken from 0xFungibleToken
import FlowToken from 0xFlowToken
import NFTStorefront from 0xStorefrontContract
import Profile from 0xProfile
import Gaia from 0xGaiaContract

// This transaction installs the Storefront ressource in an account.

transaction {
    let address: Address

    prepare(acct: AuthAccount) {
        self.address = acct.address

          // Init Profile
          if (!Profile.check(self.address)) {
            // This creates and stores the Profile in the users account
            acct.save(<- Profile.new(), to: Profile.privatePath)

            // This creates the public capability that lets applications read the profiles info
            acct.link<&Profile.Base{Profile.Public}>(Profile.publicPath, target: Profile.privatePath)
          }

          if acct.borrow<&Gaia.Collection>(from: Gaia.CollectionStoragePath) == nil {
            let collection <- Gaia.createEmptyCollection() as! @Gaia.Collection
            acct.save(<-collection, to: Gaia.CollectionStoragePath)
            acct.link<&{Gaia.CollectionPublic}>(Gaia.CollectionPublicPath, target: Gaia.CollectionStoragePath)
          }
          
          // If the account doesn't already have a Storefront
          if acct.borrow<&NFTStorefront.Storefront>(from: NFTStorefront.StorefrontStoragePath) == nil {
              // Create a new empty .Storefront
              let storefront <- NFTStorefront.createStorefront() as! @NFTStorefront.Storefront
              
              // save it to the account
              acct.save(<-storefront, to: NFTStorefront.StorefrontStoragePath)

              // create a public capability for the .Storefront
              acct.link<&NFTStorefront.Storefront{NFTStorefront.StorefrontPublic}>(NFTStorefront.StorefrontPublicPath, target: NFTStorefront.StorefrontStoragePath)
          }

          if acct.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault) == nil {
            // Create a new flowToken Vault and put it in storage
            acct.save(<-FlowToken.createEmptyVault(), to: /storage/flowTokenVault)

            // Create a public capability to the Vault that only exposes
            // the deposit function through the Receiver interface
            acct.link<&{FungibleToken.Receiver}>(
                /public/flowTokenReceiver,
                target: /storage/flowTokenVault
            )

            // Create a public capability to the Vault that only exposes
            // the balance field through the Balance interface
            acct.link<&{FungibleToken.Balance}>(
                /public/flowTokenBalance,
                target: /storage/flowTokenVault
            )
        }
    }
}