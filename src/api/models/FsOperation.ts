export type FsOperation = {
  timestamp: number;
  operationType: 'purchase' | 'createListing' | 'cancelListing';
  status: 'Pending' | 'Success' | 'Error';
  errorMessage: string | null;
  transactionId: string;
  affectedNfts: {
    nftType: string;
    nftId: number;
  }[];
  description: string;
  externalUserId: string;
};
