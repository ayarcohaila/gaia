const formatIpfsImg = ipfs => {
  return ipfs ? ipfs.replace('ipfs://', 'https://ipfs.fleek.co/ipfs/') : '';
};

export default formatIpfsImg;
