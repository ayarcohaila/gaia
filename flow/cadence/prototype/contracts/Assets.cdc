
import NonFungibleToken from 0xf8d6e0586b0a20c7

// Assets
pub contract Assets: NonFungibleToken {

    // Events
    //
    pub event ContractInitialized()
    pub event Withdraw(id: UInt64, from: Address?)
    pub event Deposit(id: UInt64, to: Address?)
    pub event Minted(id: UInt64, templateID: UInt64, name: String, description: String, imgURL: String)

    // Named Paths
    //
    pub let CollectionStoragePath: StoragePath
    pub let CollectionPublicPath: PublicPath
    pub let MinterStoragePath: StoragePath

    // totalSupply
    // The total number of Assets that have been minted
    //
    pub var totalSupply: UInt64

    // NFT
    // An Asset as an NFT
    //
    pub resource NFT: NonFungibleToken.INFT {
        // The token's ID
        pub let id: UInt64
        // The token's type, e.g. 3 == Hat
        pub let templateID: UInt64
        // The token's type, e.g. 3 == Hat
        pub let name: String
        // The token's type, e.g. 3 == Hat
        pub let description: String
        // The token's type, e.g. 3 == Hat
        pub let imgURL: String
        // The token's data
        pub let data: {String: AnyStruct}
        
        // initializer
        //
        init(initID: UInt64, initTemplateID: UInt64, initName: String, initDescription: String, initImgUrl: String) {
            self.id = initID
            self.templateID = initTemplateID
            self.name = initName
            self.imgURL = initImgUrl
            self.description = initDescription
            self.data = {}
        }
    }

    // This is the interface that users can cast their Assets Collection as
    // to allow others to deposit Assets into their Collection. It also allows for reading
    // the details of Assets in the Collection.
    pub resource interface AssetsCollectionPublic {
        pub fun deposit(token: @NonFungibleToken.NFT)
        pub fun getIDs(): [UInt64]
        pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT
        pub fun borrowAsset(id: UInt64): &Assets.NFT? {
            // If the result isn't nil, the id of the returned reference
            // should be the same as the argument to the function
            post {
                (result == nil) || (result?.id == id):
                    "Cannot borrow Asset reference: The ID of the returned reference is incorrect"
            }
        }
    }

    // Collection
    // A collection of Asset NFTs owned by an account
    //
    pub resource Collection: AssetsCollectionPublic, NonFungibleToken.Provider, NonFungibleToken.Receiver, NonFungibleToken.CollectionPublic {
        // dictionary of NFT conforming tokens
        // NFT is a resource type with an UInt64 ID field
        //
        pub var ownedNFTs: @{UInt64: NonFungibleToken.NFT}

        // withdraw
        // Removes an NFT from the collection and moves it to the caller
        //
        pub fun withdraw(withdrawID: UInt64): @NonFungibleToken.NFT {
            let token <- self.ownedNFTs.remove(key: withdrawID) ?? panic("missing NFT")

            emit Withdraw(id: token.id, from: self.owner?.address)

            return <-token
        }

        // deposit
        // Takes a NFT and adds it to the collections dictionary
        // and adds the ID to the id array
        //
        pub fun deposit(token: @NonFungibleToken.NFT) {
            let token <- token as! @Assets.NFT

            let id: UInt64 = token.id

            // add the new token to the dictionary which removes the old one
            let oldToken <- self.ownedNFTs[id] <- token

            emit Deposit(id: id, to: self.owner?.address)

            destroy oldToken
        }

        // getIDs
        // Returns an array of the IDs that are in the collection
        //
        pub fun getIDs(): [UInt64] {
            return self.ownedNFTs.keys
        }

        // borrowNFT
        // Gets a reference to an NFT in the collection
        // so that the caller can read its metadata and call its methods
        //
        pub fun borrowNFT(id: UInt64): &NonFungibleToken.NFT {
            return &self.ownedNFTs[id] as &NonFungibleToken.NFT
        }

        // borrowAsset
        // Gets a reference to an NFT in the collection as a Asset,
        // exposing all of its fields (including the templateID).
        // This is safe as there are no functions that can be called on the Asset.
        //
        pub fun borrowAsset(id: UInt64): &Assets.NFT? {
            if self.ownedNFTs[id] != nil {
                let ref = &self.ownedNFTs[id] as auth &NonFungibleToken.NFT
                return ref as! &Assets.NFT
            } else {
                return nil
            }
        }

        // destructor
        destroy() {
            destroy self.ownedNFTs
        }

        // initializer
        //
        init () {
            self.ownedNFTs <- {}
        }
    }

    // createEmptyCollection
    // public function that anyone can call to create a new empty collection
    //
    pub fun createEmptyCollection(): @NonFungibleToken.Collection {
        return <- create Collection()
    }

    // NFTMinter
    // Resource that an admin or something similar would own to be
    // able to mint new NFTs
    //
  pub resource NFTMinter {

    // mintNFT
        // Mints a new NFT with a new ID
    // and deposit it in the recipients collection using their collection reference
        //
    pub fun mintNFT(recipient: &{NonFungibleToken.CollectionPublic}, templateID: UInt64, name: String, description: String, imgURL: String) {
            emit Minted(id: Assets.totalSupply, templateID: templateID, name:name, description:description,imgURL:imgURL)

      // deposit it in the recipient's account using their reference
      recipient.deposit(token: <-create Assets.NFT(initID: Assets.totalSupply, initTemplateID: templateID, initName:name, initDescription:description, initImgUrl:imgURL))

            Assets.totalSupply = Assets.totalSupply + (1 as UInt64)
    }
  }

    // fetch
    // Get a reference to a Asset from an account's Collection, if available.
    // If an account does not have a Assets.Collection, panic.
    // If it has a collection but does not contain the assetId, return nil.
    // If it has a collection and that collection contains the assetId, return a reference to that.
    //
    pub fun fetch(_ from: Address, assetID: UInt64): &Assets.NFT? {
        let collection = getAccount(from)
            .getCapability(Assets.CollectionPublicPath)!
            .borrow<&Assets.Collection{Assets.AssetsCollectionPublic}>()
            ?? panic("Couldn't get collection")
        // We trust Assets.Collection.borowAsset to get the correct assetID
        // (it checks it before returning it).
        return collection.borrowAsset(id: assetID)
    }

    // initializer
    //
  init() {
        // Set our named paths
        //FIXME: REMOVE SUFFIX BEFORE RELEASE
        self.CollectionStoragePath = /storage/AssetsCollection001
        self.CollectionPublicPath = /public/AssetsCollection001
        self.MinterStoragePath = /storage/AssetsMinter001

        // Initialize the total supply
        self.totalSupply = 0

        // Create a Minter resource and save it to storage
        let minter <- create NFTMinter()
        self.account.save(<-minter, to: self.MinterStoragePath)

        emit ContractInitialized()
  }
}