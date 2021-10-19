const formatIpfsImg = ipfs => {
  return ipfs ? ipfs.replace('ipfs://', 'https://gateway.ipfs.io/ipfs/') : '';
};

export default formatIpfsImg;
