export const URLs = {
  root: '/',
  home: '/',
  marketplace: '/market',
  profile: address => `/profile/${address || ':id'}`,
  editProfile: '/profile/edit',
  createNFT: '/creator',
  explorer: assetId => `/explorer/asset/${assetId ?? ':id'}`
};
