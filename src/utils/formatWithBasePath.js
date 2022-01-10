const envUrls = {
  staging: 'https://gaia-redesign.herokuapp.com/',
  production: 'https://ongaia.com/'
};

const formatWithBasePath = path => {
  if (process.env.NODE_ENV == 'production') return envUrls.production + path;
  return envUrls.staging + path;
};

export default formatWithBasePath;
