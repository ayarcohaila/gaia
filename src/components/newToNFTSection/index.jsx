import { Grid } from '@mui/material';
import { NewToNFTCard } from '~/components';
import useMediaQuery from '@mui/material/useMediaQuery';
import { hasBrowse } from '~/config/config';

import * as Styled from './styled';

const NewNFTs = [
  {
    title: 'Shareef O’Neal Genesis Collection SOLD OUT!',
    description:
      'The first of a series of drops highlighting his basketball career, family, and recovery from heart surgery',
    image: 'images/newToNFT/shareef.webp',
    linkProps: { href: '/browse' },
    linkText: 'Go To Marketplace',
    hasButton: hasBrowse
  },
  {
    title: 'Bryson DeChambeau - Vegas, Baby!',
    description: 'Collectible NFT commemorating Las Vegas Showdown',
    image: 'images/newToNFT/bryson_banner.webp',
    linkProps: { href: '/bryson' },
    linkText: 'Buy Now',
    hasButton: true
  },
  {
    title: 'About The Team',
    description: 'Learn more about NFT Genius, the team behind Gaia.',
    image: 'images/newToNFT/nftg.webp',
    linkProps: { href: 'https://www.nftgenius.com/', target: '_blank' },
    linkText: 'Visit Website',
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
            <NewToNFTCard data={card} />
          </Styled.CustomGrid>
        ))}
      </Grid>
    </>
  );
}
