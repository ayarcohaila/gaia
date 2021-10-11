import { Grid } from '@mui/material';
import NFTCard from '~/components/nftCard';

const NFTList = ({ nfts }) => {
  return (
    <Grid container justifyContent="center" spacing={2}>
      {nfts.map((nft, index) => (
        <Grid key={`item-${index}`} item spacing={0}>
          <NFTCard nft={nft} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NFTList;
