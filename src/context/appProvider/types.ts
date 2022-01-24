import { Dispatch, SetStateAction } from 'react';

export interface AppContextValue {
  appData: {
    page: number;
    marketplaceLoading: boolean;
    marketplaceNfts: any[];
    marketplaceSort: {
      last_active_price: 'asc' | 'desc';
    };
  };
  handleAppData: Dispatch<SetStateAction<AppContextValue>>;
}
