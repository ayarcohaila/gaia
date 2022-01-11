import PropTypes from 'prop-types';

import formatWithBasePath from '~/utils/formatWithBasePath';

import { NextSeo } from 'next-seo';

function SEO({ description, title, imgURL }) {
  const openGraph = {
    site_name: 'Gaia',
    type: 'website',
    title: title,
    description: description,
    locale: 'en_US',
    images: [
      {
        url: imgURL
      }
    ]
  };

  const twitter = {
    handle: '@handle',
    site: '@site',
    cardType: 'summary'
  };
  return (
    <NextSeo
      title={title ? `${title} ` : ''}
      description={description}
      openGraph={openGraph}
      twitter={twitter}
    />
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imgURL: PropTypes.string
};

SEO.defaultProps = {
  description:
    'The world’s largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs). Buy, sell, and discover exclusive digital assets.',
  imgURL: formatWithBasePath('static/img/main-unfurl.png')
};

export default SEO;
