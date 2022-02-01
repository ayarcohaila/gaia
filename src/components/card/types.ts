export interface CardProps {
  data: {
    mystery: boolean;
    asset_id: any;
    mint_number: any;
    collection_id: string;
    collection_name: string;
    imageURL: string;
    has_sale_offers: boolean;
    template: {
      metadata: {
        id: any;
        video: string;
        img: string;
        title: string;
      };
    };
    sale_offers: Array<{
      status: 'active' | 'finished';
      price: string;
      updated_at: string;
    }>;
  };
  hasActions: boolean;
  setPosition?: (id: number) => void;
  hasPrice?: boolean;
  imgLoaded: boolean;
}
