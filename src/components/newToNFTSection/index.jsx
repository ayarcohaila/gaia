import { Grid, Typography } from '@mui/material';
import { NewToNFTCard } from '~/components';
import useMediaQuery from '@mui/material/useMediaQuery';

import * as Styled from './styled';

const NewNFTs = [
  {
    title: "A Beginner's Guide to NFTs",
    description: 'Learn what are they, why collect, and how to open a wallet now.',
    image: 'collections/ballerz.png',
    link: '/nft-beginners-guide'
  },
  {
    title: 'About the Flow Blockchain',
    description:
      'Built for the next generation of digital collectibles. The marketplace is our community of NFT collectors.',
    image: 'collections/ballerz.png',
    link: '/about-the-flow-blockchain'
  },
  {
    title: 'Learn More About GAIA',
    description:
      'We have created a next-generation platform, to create an accessible digital ecosystem.',
    image: 'collections/ballerz.png',
    link: '/learn-more-about-gaia'
  }
];

export default function NewToNFTSection() {
  const isMediumDevice = useMediaQuery('(max-width:1080px)');
  return (
    <>
      <Typography variant="h4">New To NFTs?</Typography>
      <Grid xs={12} container item columnSpacing="16px" mt={isMediumDevice ? '0px' : '20px'}>
        {NewNFTs.map((card, index) => (
          <Styled.CustomGrid
            key={index}
            item
            // sm={12}
            md={4}
            mt={isMediumDevice ? '30px' : '0px'}
            display="flex"
            alignItems="center"
            justifyContent="center">
            <NewToNFTCard data={card} />
          </Styled.CustomGrid>
        ))}
      </Grid>
    </>
  );
}
