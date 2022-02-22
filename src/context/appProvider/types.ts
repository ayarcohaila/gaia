export interface AppContextValue {
  appData: {
    page: number;
    loadMore: boolean;
    sort: boolean;
    marketplaceLoading: boolean;
    marketplaceNfts: any[];
    cardRef: any;
    imgRef: any;
    marketplaceSort: {
      last_active_price: 'asc' | 'desc';
    };
  };
  handleAppData: (value: AppContextValue['appData']) => void;
}
