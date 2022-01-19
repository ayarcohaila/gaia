import PropTypes from 'prop-types';

import { NextSeo } from 'next-seo';
import { SEO_DATA } from '~/constant';

function SEO({ description, title, imgURL, keywords }) {
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
      additionalMetaTags={[{ property: 'keywords', content: keywords }]}
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
  title: SEO_DATA.title.default,
  description: SEO_DATA.description.default,
  keywords: SEO_DATA.keywords.default,
  imgURL: SEO_DATA.imgUrl.default
};

export default SEO;
