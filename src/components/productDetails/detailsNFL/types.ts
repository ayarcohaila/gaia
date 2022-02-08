import { GetNflEditionByIdQuery } from '~/store/server/graphql.generated';

export interface NflDetailsTopSectionProps {
  edition: GetNflEditionByIdQuery['nfl_all_day_editions'][number];
  serial_number?: string;
}
