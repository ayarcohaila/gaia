import Head from 'next/head';
import PropTypes from 'prop-types';

function SEO({ description, title, siteTitle, imgURL, label1, label2, data1, data2 }) {
  return (
    <Head>
      <title>{`${title ? `${title} | ` : ''}${siteTitle}`}</title>
      <meta name="description" content={description} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:image" content={imgURL} />
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:image" content={imgURL} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:label1" value={label1} />
      <meta name="twitter:data1" value={data1} />
      <meta name="twitter:label2" value={label2} />
      <meta name="twitter:data2" value={data2} />
      <meta name="twitter:image" content={imgURL} />
      <meta name="twitter:image:src" content={imgURL} />
    </Head>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  siteTitle: PropTypes.string,
  imgURL: PropTypes.string,
  label1: PropTypes.string,
  label2: PropTypes.string,
  data1: PropTypes.string,
  data2: PropTypes.string
};

SEO.defaultProps = {
  description:
    'The world’s largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.',
  siteTitle: 'gaia',
  imgURL: '/static/img/main-unfurl.png'
};

export default SEO;
