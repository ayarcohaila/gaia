import { GetNflMomentQuery } from '~/store/server/graphql.generated';

export interface MomentProps {
  moment: GetNflMomentQuery['nfl_all_day_moments'][number];
}
