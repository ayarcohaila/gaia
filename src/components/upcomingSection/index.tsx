import { Grid } from '@mui/material';
import CardFilled from '~/components/cardFilled';
import CardFill from '~/components/cardFilled/cardFill';
import { CollectionsProps, Collection } from '~/components/cardFilled/types';
import useBreakpoints from '~/hooks/useBreakpoints';
import * as Styled from './styles';

// FUNCTION TO REPEAT COLLECTIONS TO TEST RESPONSIVITY
// EXCLUDE ONLY WHEN MERGE TO PRODUCTION

// const generate = (collections: any[], count: number) => {
//   const collectionsArray = Array(count)
//     .fill({})
//     .map((_, index) => collections[index % collections.length])
//     .map(c => ({ ...c, config: { ...c.config, id: '' + Math.random() * 10000 } }));

//   return collectionsArray;
// };

const UpcomingSection = (props: CollectionsProps) => {
  const collections = props.collections;
  const { isMediumDevice } = useBreakpoints();

  return (
    <Grid mt={'24px'} marginX={isMediumDevice ? '5px' : '32px'}>
      <Styled.SectionTitle mb={3}>New & Upcoming Collections</Styled.SectionTitle>
      <Grid container item rowSpacing="20px" spacing="16px" justifyContent="center">
        {collections?.map((collection: Collection, index) => {
          return (
            <CardFilled
              index={index}
              total={collections.length}
              card={collection}
              key={collection.config.id}>
              <CardFill card={collection}></CardFill>
            </CardFilled>
          );
        })}
      </Grid>
    </Grid>
  );
};

export default UpcomingSection;
