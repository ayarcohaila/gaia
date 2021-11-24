import { memo, useMemo } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { VideoPlayer } from '~/components';
import { isVideo } from '~/utils/string';
import { COLLECTIONS_NAME } from '../../../../../collections_setup';
import formatIpfsImg from '~/utils/formatIpfsImg';

import * as Styled from './styles';

const Asset = ({ metadata }) => {
  const {
    query: { collection_name }
  } = useRouter();

  const isVideoAsset = useMemo(
    () => isVideo(metadata?.img) || collection_name === COLLECTIONS_NAME.BRYSON,
    [metadata?.img]
  );

  if (isVideoAsset) {
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
