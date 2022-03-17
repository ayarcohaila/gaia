import { ReactElement } from 'react';
export interface CardFilledProps {
  card: any;
  children: ReactElement;
  shadow?: boolean;
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
    pageTitle: string;
    status: string;
    comingStatus: string;
    mainColor: string;
    collectionPath: string;
    ipLogo: string;
    ipTextColor: string;
  };
  lowerPrice: number;
}
