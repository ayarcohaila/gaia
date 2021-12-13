import { ipfsGateway } from '~/config/config';

const formatIpfsImg = ipfs => {
  return ipfs ? ipfs.replace('ipfs://', ipfsGateway) : '';
};

export default formatIpfsImg;
