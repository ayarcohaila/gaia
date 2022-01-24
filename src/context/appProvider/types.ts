import { Dispatch, SetStateAction } from 'react';

export interface AppContextValue {
  appData: {
    page: number;
    loadMore: boolean;
    marketplaceLoading: boolean;
    marketplaceNfts: any[];
    marketplaceSort: {
      last_active_price: 'asc' | 'desc';
    };
  };
  handleAppData: Dispatch<SetStateAction<AppContextValue>>;
}
