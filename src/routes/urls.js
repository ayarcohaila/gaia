export const URLs = {
  root: '/',
  home: '/',
  marketplace: '/marketplace',
  profile: address => `/profile/${address || ':id'}`,
  editProfile: '/edit-profile'
};
