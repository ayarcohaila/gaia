import { Grid } from '@mui/material';
import CardHome from '~/components/cards/cardHome';
import useMediaQuery from '@mui/material/useMediaQuery';
import { hasBrowse } from '~/config/config';

import * as Styled from './styled';

const NewNFTs = [
  {
    title: 'Ballerz',
    description: 'A basketball-inspired generative NFT living on the Flow blockchain',
    image: '/collections/ballerz/ballerz-home.jpg',
    linkProps: { href: '/ballerz' },
    linkText: 'Buy Now',
    hasButton: true
  },
  {
    title: 'Shareef O’Neal',
    description:
      'The first of a series of drops highlighting his basketball career, family, and recovery from heart surgery',
    image: '/collections/shareef/shareef-home.webp',
    linkProps: { href: '/shareef' },
    linkText: 'Buy now',
    hasButton: true
  },
  {
    title: 'Bryson DeChambeau - Vegas, Baby!',
    description: 'Collectible NFT commemorating Las Vegas Showdown',
    image: '/collections/bryson/bryson-home.webp',
    linkProps: { href: '/bryson' },
    linkText: 'Buy Now',
    hasButton: true
  }
];

export default function NewToNFTSection() {
  const isMediumDevice = useMediaQuery('(max-width:1080px)');
  return (
    <>
      <Grid xs={12} container item spacing="32px" mt={isMediumDevice && '0px'}>
        {NewNFTs.map((card, index) => (
          <Styled.CustomGrid key={index} item md={4}>
            <CardHome data={card} />
          </Styled.CustomGrid>
        ))}
      </Grid>
    </>
  );
}
