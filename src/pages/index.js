import { Grid } from '@mui/material';
import { NewToNFTCard } from '../components';

const NewNFTs = [
  {
    title: "A Beginner's Guide to NFTs",
    description: 'Learn what are they, why collect, and how to open a wallet now.',
    image: '',
    link: '/nft-beginners-guide'
  },
  {
    title: 'About the Flow Blockchain',
    description:
      'Built for the next generation of digital collectibles. The marketplace is our community of NFT collectors.',
    image: '',
    link: '/about-the-flow-blockchain'
  },
  {
    title: 'Learn More About GAIA',
    description:
      'We have created a next-generation platform, to create an accessible digital ecosystem.',
    image: '',
    link: '/learn-more-about-gaia'
  }
];

const Home = () => {
  return (
    <>
      <Grid>
        <h1>New To NFTs?</h1>
        <Grid xs={12} container item>
          {NewNFTs.map((card, index) => (
            <Grid key={index} item xs={4}>
              <NewToNFTCard data={card} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
