export const getImageURL = (image, local) => {
  if (local) return image;
  const removePrefix = image.replace('ipfs://', '');
  const imageURL = removePrefix.replace(/\s/g, '');
  if (imageURL.match('^(https?://).*$')) return imageURL;
  return new URL(imageURL, 'https://btco.mypinata.cloud/ipfs/').toString();
};
