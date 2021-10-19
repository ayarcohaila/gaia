import { NFTCard } from '~/components';

const NFTList = ({ nfts }) => {
  return (
    <>
      {nfts.map(nft => (
        <NFTCard key={nft.id} data={nft} />
      ))}
    </>
  );
};

export default NFTList;
