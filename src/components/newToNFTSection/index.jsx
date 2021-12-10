import { Grid } from '@mui/material';
import { NewToNFTCard } from '~/components';
import useMediaQuery from '@mui/material/useMediaQuery';

import * as Styled from './styled';

const NewNFTs = [
  {
    title: 'Introducing BALLERZ',
    description:
      'Generative PFP basketball collection on Flow -- SOLD OUT! Marketplace coming soon.',
    image: 'images/newToNFT/ballerz.jpg',
    linkProps: { href: 'http://twitter.com/ballerz_nft', target: '_blank' },
    linkText: 'Follow on Twitter'
  },
  {
    title: 'Bryson DeChambeau - Vegas, Baby!',
    description: 'Collectible NFT commemorating Las Vegas Showdown',
    image: 'images/newToNFT/bryson_banner.jpg',
    linkProps: { href: '/bryson' },
    linkText: 'Buy Now'
  },
  {
    title: 'About The Team',
    description: 'Learn more about NFT Genius, the team behind Gaia.',
    image: 'images/newToNFT/nftg.jpg',
    linkProps: { href: 'https://www.nftgenius.com/', target: '_blank' },
    linkText: 'Visit Website'
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
