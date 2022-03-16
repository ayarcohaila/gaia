import { ReactElement } from 'react';
export interface CardFilledProps {
  card: any;
  index: number;
  total: number;
  children: ReactElement;
}

export interface CollectionsProps {
  collections: [Collection];
}

export interface Collection {
  config: {
    id: string;
    avatar: string;
    collectionName: string;
    collectionSize: string;
    status: string;
    comingStatus: string;
    mainColor: string;
    collectionPath: string;
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
}
