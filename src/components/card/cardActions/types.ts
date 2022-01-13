export interface CardActionsProps {
  data: {
    has_sale_offers: boolean;
    collection_id: string;
    sale_offers: Array<{
      status: 'active' | 'finished';
    }>;
  };
  loading: boolean;
  toggleCancelListingModal: () => void;
  toggleSellNftModal: () => void;
  toggleTransferNftModal: () => void;
}
