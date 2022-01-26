import { BALLERZ_COMPUTED_PROPERTIES } from '~/components/filters/constants';
import { GetNftByIdQuery } from '~/store/server/graphql.generated';

export interface ProductDetailsTopSectionProps {
  nft: GetNftByIdQuery['nft'][number];
  hasMultipleOffers: boolean;
  attributesOrder: {
    indexOf: (key: string) => number;
  };
  ballerzComputedProps: typeof BALLERZ_COMPUTED_PROPERTIES;
}
