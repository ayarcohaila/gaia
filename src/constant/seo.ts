import formatWithBasePath from '~/utils/formatWithBasePath';

export const SEO_DATA = {
  title: {
    default: 'Gaia - NFT Marketplace on Flow',
    profile: 'Gaia - Profile',
    favorites: 'Gaia - Favorites',
    termService: 'Gaia - Terms of Use',
    privacyPolicy: 'Gaia - Privacy Policy',
    copyrightPolicy: 'Gaia - Copyright Policy'
  },
  description: {
    default: `The world's largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.`,
    profile: 'The NFTs list for $WALLET wallet address'
  },
  keywords: {
    default: 'Gaia, Flow, NFT, Marketplace, NFT Marketplace, Digital marketplace, Flow marketplace'
  },
  imgUrl: {
    default: formatWithBasePath('static/img/main-unfurl.png')
  }
};
