import { GetNftByIdQuery } from '~/store/server/graphql.generated';
import {
  BALLERZ_COMPUTED_PROPERTIES,
  SHAREEF_COMPUTED_PROPERTIES,
  SNEAKERZ_COMPUTED_PROPERTIES
} from '~/components/filters/constants';

export interface ProductDetailsTopSectionProps {
  nft: GetNftByIdQuery['nft'][number];
  hasMultipleOffers: boolean;
  attributesOrder: {
    indexOf: (key: string) => number;
  };
  computedProps:
    | typeof BALLERZ_COMPUTED_PROPERTIES
    | typeof SHAREEF_COMPUTED_PROPERTIES
    | typeof SNEAKERZ_COMPUTED_PROPERTIES;
}
