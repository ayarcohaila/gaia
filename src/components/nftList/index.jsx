import { NFTCard } from '~/components';

const NFTList = ({ nfts }) => {
  return (
    <>
      {nfts.map((nft, index) => (
        <NFTCard key={`item-${index}`} nft={nft.item} />
      ))}
    </>
  );
};

export default NFTList;
