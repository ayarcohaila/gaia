export interface CollectionsProps {
  collections: [Collection];
}

export interface Collection {
  config: {
    avatar: string;
    collectionName: string;
    collectionSize: string;
  };
  nft: {
    id: string;
    template: {
      collection: {
        description: string;
      };
    };
    sale_offers: [{ price: string }];
  };
}
