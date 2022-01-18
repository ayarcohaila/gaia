import { memo } from 'react';
import PropTypes from 'prop-types';

import VideoPlayer from '~/components/videoPlayer';
import formatIpfsImg from '~/utils/formatIpfsImg';
import Image from 'next/image';

import * as Styled from './styles';

const Asset = ({ metadata }) => {
  if (metadata?.video) {
    return (
      <VideoPlayer poster={formatIpfsImg(metadata.img)} src={formatIpfsImg(metadata?.video)} />
    );
  }

  return (
    <Styled.ImageContainer>
      <Image
        data-cy="asset-image"
        alt={metadata?.title}
        src={formatIpfsImg(metadata.img)}
        blurDataURL={formatIpfsImg(metadata.img)}
        height={424}
        width={424}
        placeholder="blur"
      />
    </Styled.ImageContainer>
  );
};

Asset.propTypes = {
  metadata: PropTypes.object.isRequired
};

export default memo(Asset);
