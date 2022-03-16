import { Grid, Typography } from '@mui/material';
import NewToNFTCard from '~/components/newToNFTCard';
import useMediaQuery from '@mui/material/useMediaQuery';
import { hasBrowse } from '~/config/config';

import * as Styled from './styled';
import useBreakpoints from '~/hooks/useBreakpoints';

const NewNFTs = [
  {
    title: 'The Home of BALLERZ',
    description: 'Secondary marketplace is now live! Buy and sell with other collectors.',
    image: '/images/newToNFT/ballerz.webp',
    linkProps: { href: 'https://ongaia.com/ballerz', target: '_blank' },
    linkText: 'Explore BALLERZ',
    hasButton: true
  },
  {
    title: 'Shareef O’Neal Genesis Collection SOLD OUT!',
    description:
      'The first of a series of drops highlighting his basketball career, family, and recovery from heart surgery',
    image: '/images/newToNFT/shareef.webp',
    linkProps: { href: '/shareef' },
    linkText: 'Buy now',
    hasButton: hasBrowse
  },
  {
    title: 'Bryson DeChambeau - Vegas, Baby!',
    description: 'Collectible NFT commemorating Las Vegas Showdown',
    image: '/images/newToNFT/bryson_banner.webp',
    linkProps: { href: '/bryson' },
    linkText: 'Buy Now',
    hasButton: true
  }
  // {
  //   title: 'About The Team',
  //   description: 'Learn more about NFT Genius, the team behind Gaia.',
  //   image: '/images/newToNFT/nftg.webp',
  //   linkProps: { href: 'https://www.nftgenius.com/', target: '_blank' },
  //   linkText: 'Visit Website',
  //   hasButton: true
  // }
];

export default function NewToNFTSection() {
  const { isMediumDevice, isLargeDevice } = useBreakpoints();

  return (
    <>
      <Styled.SectionTitle ml={isMediumDevice ? 1 : 6} mt={'34px'}>
        Other Collections
      </Styled.SectionTitle>
      <Grid
        xs={12}
        container
        item
        rowSpacing="32px"
        spacing="16px"
        padding={`0 ${isMediumDevice ? '8px' : isLargeDevice ? '48px' : '3.3%'}`}
        mt={isMediumDevice && '0px'}>
        {NewNFTs.map((card, index) => (
          <Styled.CustomGrid key={index} item md={4}>
            <NewToNFTCard data={card} />
          </Styled.CustomGrid>
        ))}
      </Grid>
    </>
  );
}
