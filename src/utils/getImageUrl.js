import { ipfsGateway } from '../config/config';

export const getImageURL = (image, local) => {
  if (local) return image;
  const imageURL = image.replace(/\s/g, '');
  if (imageURL.match('^(https?://).*$')) return imageURL;
  return new URL(imageURL, ipfsGateway).toString();
};
