export interface CardFillProps {
  card: {
    config: {
      avatar: string;
      collectionName: string;
      collectionSize: string;
      comingStatus: string;
      mainColor: string;
      ipLogo: string;
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
