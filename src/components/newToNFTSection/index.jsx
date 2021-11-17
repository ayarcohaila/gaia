import { Grid } from '@mui/material';
import { NewToNFTCard } from '~/components';
import useMediaQuery from '@mui/material/useMediaQuery';

import * as Styled from './styled';

const NewNFTs = [
  {
    title: 'Shareef O’Neal Debuts in December',
    description:
      'The first of a  series of drops highlighting his basketball career, family, and recovery from heart surgery.',
    image: 'images/newToNFT/shareef.jpg',
    link: 'https://twitter.com/SSJreef',
    linkText: 'Follow on Twitter'
  },
  {
    title: 'Introducing BALLERZ',
    description:
      'Generative PFP basketball collection on Flow -- SOLD OUT! Marketplace coming soon.',
    image: 'images/newToNFT/ballerz.jpg',
    link: 'https://twitter.com/ballerz_nft',
    linkText: 'Follow on Twitter'
  },
  {
    title: 'About The Team',
    description: 'Learn more about NFT Genius, the team behind Gaia.',
    image: 'images/newToNFT/nftg.jpg',
    link: 'https://www.nftgenius.com/',
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
