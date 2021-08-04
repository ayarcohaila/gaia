export const getImageURL = (image, local, size) => {
  if (local) return image;
  const removePrefix = image.replace('ipfs://', '');
  const imageURL = removePrefix.replace(/\s/g, '');
  if (imageURL.match('^(https?://).*$')) return imageURL;
  if (size) {
    return `https://ipfs-cache.nftquery.io/${size}/${imageURL}`;
  }
  return `https://btco.mypinata.cloud/ipfs/${imageURL}`;
};
