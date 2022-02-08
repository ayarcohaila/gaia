export interface CardFillProps {
  card: {
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
  };
}
