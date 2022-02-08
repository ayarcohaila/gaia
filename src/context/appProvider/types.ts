export interface AppContextValue {
  appData: {
    page: number;
    loadMore: boolean;
    marketplaceLoading: boolean;
    marketplaceNfts: any[];
    cardRef: any;
    imgRef: any;
    marketplaceSort: any;
  };
  handleAppData: (value: AppContextValue['appData']) => void;
}
