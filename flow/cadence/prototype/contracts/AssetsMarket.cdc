import FlowToken from 0x0ae53cb6e3f42a79
import FungibleToken from 0xee82856bf20e2aa6
import Assets from "./Assets.cdc"
import NonFungibleToken from "./NonFungibleToken.cdc"
 /*
    This is a simple Assets initial sale contract for the DApp to use
    in order to list and sell Assets.

    Its structure is neither what it would be if it was the simplest possible
    marjet contract or if it was a complete general purpose market contract.
    Rather it's the simplest possible version of a more general purpose
    market contract that indicates how that contract might function in
    broad strokes. This has been done so that integrating with this contract
    is a useful preparatory exercise for code that will integrate with the
    later more general purpose market contract.

    It allows:
    - Anyone to create Sale Offers and place them in a collection, making it
      publicly accessible.
    - Anyone to accept the offer and buy the asset.

    It notably does not handle:
    - Multiple different sale NFT contracts.
    - Multiple different payment FT contracts.
    - Splitting sale payments to multiple recipients.

 */

pub contract AssetsMarket {
    // SaleOffer events.
    //
    // A sale offer has been created.
    pub event SaleOfferCreated(assetID: UInt64, price: UFix64)
    // Someone has purchased an asset that was offered for sale.
    pub event SaleOfferAccepted(assetID: UInt64)
    // A sale offer has been destroyed, with or without being accepted.
    pub event SaleOfferFinished(assetID: UInt64)
    
    // Collection events.
    //
    // A sale offer has been inserted into the collection of Address.
    pub event CollectionInsertedSaleOffer(saleAssetID: UInt64, saleAssetCollection: Address)
    // A sale offer has been removed from the collection of Address.
    pub event CollectionRemovedSaleOffer(saleAssetID: UInt64, saleAssetCollection: Address)

    // Named paths
    //
    pub let CollectionStoragePath: StoragePath
    pub let CollectionPublicPath: PublicPath

    // SaleOfferPublicView
    // An interface providing a read-only view of a SaleOffer
    //
    pub resource interface SaleOfferPublicView {
        pub var saleCompleted: Bool
        pub let saleAssetID: UInt64
        pub let saleOwner: Address
        pub var salePrice: UFix64
        pub fun setPrice(_ newPrice: UFix64) {  
            pre {
                    newPrice > 0.00000000:
                    "Price must at least 0"
                }
      }
       
    }

   
    // SaleOffer
    // A Assets NFT being offered to sale for a set fee paid in FlowToken.
    //
    pub resource SaleOffer: SaleOfferPublicView {
        // Whether the sale has completed with someone purchasing the asset.
        pub var saleCompleted: Bool


        // The Assets NFT ID for sale.
        pub let saleAssetID: UInt64

        pub let saleOwner: Address

        // The collection containing that ID.
        access(self) let sellerAssetProvider: Capability<&Assets.Collection{NonFungibleToken.Provider}>
        // The sale payment price.
        pub var salePrice: UFix64

        // The FlowToken vault that will receive that payment if teh sale completes successfully.
        access(self) let sellerPaymentReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>

        pub fun setPrice(_ newPrice: UFix64) { self.salePrice = newPrice }
        
        
        
        
        
        
        
        // Called by a purchaser to accept the sale offer.
        // If they send the correct payment in FlowToken, and if the asset is still available,
        // the Assets NFT will be placed in their Assets.Collection .
        //
        pub fun accept(
            buyerCollection: &Assets.Collection{NonFungibleToken.Receiver},
            buyerPayment: @FungibleToken.Vault
        ) {
            pre {
                buyerPayment.balance == self.salePrice: "payment does not equal offer price"
                self.saleCompleted == false: "the sale offer has already been accepted"
            }

            self.saleCompleted = true

            self.sellerPaymentReceiver.borrow()!.deposit(from: <-buyerPayment)

            let nft <- self.sellerAssetProvider.borrow()!.withdraw(withdrawID: self.saleAssetID)
            buyerCollection.deposit(token: <-nft)

            emit SaleOfferAccepted(assetID: self.saleAssetID)
        }

        pub fun changePrice(saleAssetID: UInt64 , newPrice: UFix64) {
         

            self.salePrice = 12.00000000



        }

        // destructor
        //
        destroy() {
            // Whether the sale completed or not, publicize that it is being withdrawn.
            emit SaleOfferFinished(assetID: self.saleAssetID)
        }

        // initializer
        // Take the information required to create a sale offer, notably the capability
        // to transfer the Assets NFT and the capability to receive FlowToken in payment.
        //
        init(
            sellerAssetProvider: Capability<&Assets.Collection{NonFungibleToken.Provider}>,
            saleAssetID: UInt64,
            saleOwner:Address,
            sellerPaymentReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>,
            salePrice: UFix64
        ) {
            pre {
                sellerAssetProvider.borrow() != nil: "Cannot borrow seller"
                sellerPaymentReceiver.borrow() != nil: "Cannot borrow sellerPaymentReceiver"
            }

            self.saleCompleted = false

            self.sellerAssetProvider = sellerAssetProvider
            self.saleAssetID = saleAssetID
            self.saleOwner = saleOwner
            self.sellerPaymentReceiver = sellerPaymentReceiver
            self.salePrice = salePrice

            emit SaleOfferCreated(assetID: self.saleAssetID, price: self.salePrice)
        }
    }

    // createSaleOffer
    // Make creating a SaleOffer publicly accessible.
    //
    pub fun createSaleOffer (
        sellerAssetProvider: Capability<&Assets.Collection{NonFungibleToken.Provider}>,
        saleAssetID: UInt64,
        saleOwner: Address,
        sellerPaymentReceiver: Capability<&FlowToken.Vault{FungibleToken.Receiver}>,
        salePrice: UFix64
    ): @SaleOffer {
        return <-create SaleOffer(
            sellerAssetProvider: sellerAssetProvider,
            saleAssetID: saleAssetID,
            saleOwner: saleOwner,
            sellerPaymentReceiver: sellerPaymentReceiver,
            salePrice: salePrice,
           
        )
    }

    // CollectionManager
    // An interface for adding and removing SaleOffers to a collection, intended for
    // use by the collection's owner.
    //
    pub resource interface CollectionManager {
        pub fun insert(offer: @AssetsMarket.SaleOffer)
        pub fun remove(saleAssetID: UInt64): @SaleOffer 
    }

        // CollectionPurchaser
    // An interface to allow purchasing assets via SaleOffers in a collection.
    // This function is also provided by CollectionPublic, it is here to support
    // more fine-grained access to the collection for as yet unspecified future use cases.
    //
    pub resource interface CollectionPurchaser {
        pub fun purchase(
            saleAssetID: UInt64,
            buyerCollection: &Assets.Collection{NonFungibleToken.Receiver},
            buyerPayment: @FungibleToken.Vault
        )
    }

    // CollectionPublic
    // An interface to allow listing and borrowing SaleOffers, and purchasing assets via SaleOffers in a collection.
    //
    pub resource interface CollectionPublic {
        pub fun getSaleOfferIDs(): [UInt64]
        pub fun borrowSaleAsset(saleAssetID: UInt64): &SaleOffer{SaleOfferPublicView}?
        pub fun purchase(
            saleAssetID: UInt64,
            buyerCollection: &Assets.Collection{NonFungibleToken.Receiver},
            buyerPayment: @FungibleToken.Vault
        )
   }

    // Collection
    // A resource that allows its owner to manage a list of SaleOffers, and purchasers to interact with them.
    //
    pub resource Collection : CollectionManager, CollectionPurchaser, CollectionPublic {
        pub var saleOffers: @{UInt64: SaleOffer}

        // insert
        // Insert a SaleOffer into the collection, replacing one with the same saleAssetID if present.
        //
         pub fun insert(offer: @AssetsMarket.SaleOffer) {
            let id: UInt64 = offer.saleAssetID

            // add the new offer to the dictionary which removes the old one
            let oldOffer <- self.saleOffers[id] <- offer
            destroy oldOffer

            emit CollectionInsertedSaleOffer(saleAssetID: id, saleAssetCollection: self.owner?.address!)
        }
       

        // remove
        // Remove and return a SaleOffer from the collection.
        pub fun remove(saleAssetID: UInt64): @SaleOffer {
            emit CollectionRemovedSaleOffer(saleAssetID: saleAssetID, saleAssetCollection: self.owner?.address!)
            return <-(self.saleOffers.remove(key: saleAssetID) ?? panic("missing SaleOffer"))
        }
        


        

 
        // purchase
        // If the caller passes a valid saleAssetID and the asset is still for sale, and passes a FlowToken vault
        // typed as a FungibleToken.Vault (FlowToken.deposit() handles the type safety of this)
        // containing the correct payment amount, this will transfer the KittyAsset to the caller's
        // Assets collection.
        // It will then remove and destroy the offer.
        // Note that is means that events will be emitted in this order:
        //   1. Collection.CollectionRemovedSaleOffer
        //   2. Assets.Withdraw
        //   3. Assets.Deposit
        //   4. SaleOffer.SaleOfferFinished
        //
        pub fun purchase(
            saleAssetID: UInt64,
            buyerCollection: &Assets.Collection{NonFungibleToken.Receiver},
            buyerPayment: @FungibleToken.Vault
        ) {
            pre {
                self.saleOffers[saleAssetID] != nil: "SaleOffer does not exist in the collection!"
            }
            let offer <- self.remove(saleAssetID: saleAssetID)
            offer.accept(buyerCollection: buyerCollection, buyerPayment: <-buyerPayment)
            //FIXME: Is this correct? Or should we return it to the caller to dispose of?
            destroy offer
        }
        




        // getSaleOfferIDs
        // Returns an array of the IDs that are in the collection
        //
        pub fun getSaleOfferIDs(): [UInt64] {
            return self.saleOffers.keys
        }

        // borrowSaleAsset
        // Returns an Optional read-only view of the SaleAsset for the given saleAssetID if it is contained by this collection.
        // The optional will be nil if the provided saleAssetID is not present in the collection.
        //
        pub fun borrowSaleAsset(saleAssetID: UInt64): &SaleOffer{SaleOfferPublicView}? {
            if self.saleOffers[saleAssetID] == nil {
                return nil
            } else {
                return &self.saleOffers[saleAssetID] as &SaleOffer{SaleOfferPublicView}
            }
        }
        // destructor
        //
        destroy () {
            destroy self.saleOffers
        }

        // constructor
        //
        init () {
            self.saleOffers <- {}
        }
    }

    // createEmptyCollection
    // Make creating a Collection publicly accessible.
    //
    pub fun createEmptyCollection(): @Collection {
        return <-create Collection()
    }

    init () {
        //FIXME: REMOVE SUFFIX BEFORE RELEASE
        self.CollectionStoragePath = /storage/AssetsMarketCollection001
        self.CollectionPublicPath = /public/AssetsMarketCollection001
    }
}