import { memo } from 'react';
import PropTypes from 'prop-types';

import { VideoPlayer } from '~/components';
import formatIpfsImg from '~/utils/formatIpfsImg';

import * as Styled from './styles';

const Asset = ({ metadata }) => {
  if (metadata?.video) {
    return (
      <VideoPlayer poster={formatIpfsImg(metadata.img)} src={formatIpfsImg(metadata?.video)} />
    );
  }

  return (
    <Styled.ImageContainer>
      <Styled.Image
        alt={metadata?.title}
        blurDataURL={formatIpfsImg(metadata.img)}
        layout="fill"
        placeholder="blur"
        src={formatIpfsImg(metadata.img)}
      />
    </Styled.ImageContainer>
  );
};

Asset.propTypes = {
  metadata: PropTypes.object.isRequired
};

export default memo(Asset);
