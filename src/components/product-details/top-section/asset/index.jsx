import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import { VideoPlayer } from '~/components';
import { isVideo } from '~/utils/string';

import * as Styled from './styles';

const Asset = ({ metadata }) => {
  const isVideoAsset = useMemo(() => isVideo(metadata?.img), [metadata?.img]);
  const url = useMemo(
    () => `https://images.ongaia.com/ipfs/`.concat(metadata?.img?.slice(7, metadata?.img?.length)),
    [metadata?.img]
  );

  if (isVideoAsset) {
    return <VideoPlayer />;
  }

  return (
    <Styled.ImageContainer>
      <Styled.Image
        alt={metadata?.title}
        blurDataURL={url}
        layout="fill"
        placeholder="blur"
        src={url}
      />
    </Styled.ImageContainer>
  );
};

Asset.propTypes = {
  metadata: PropTypes.object.isRequired
};

export default memo(Asset);
