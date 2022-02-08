import { Grid } from '@mui/material';
import Image from 'next/image';
import { memo, useMemo, useState } from 'react';
import VideoPlayer from '~/components/videoPlayer';
import useBreakpoints from '~/hooks/useBreakpoints';
import formatIpfsImg from '~/utils/formatIpfsImg';
import * as Styles from './styles';
import { AssetProps } from './types';

const Asset = ({ assets }: AssetProps) => {
  const [selected, setSelected] = useState(0);
  const isArray = Array.isArray(assets);
  const current = isArray ? assets[selected] : assets;
  const { isSmallDevice } = useBreakpoints();

  const currentAsset = useMemo(() => {
    return current.video ? (
      <VideoPlayer
        src={formatIpfsImg(current.video)}
        poster={formatIpfsImg(current.img)}
        width={['424px', '380px', '275px']}
        height={['424px', '380px', '275px']}
        containerProps={undefined}
        loop={true}
        autoPlay={true}
      />
    ) : (
      <Styles.ImageContainer>
        <Image
          data-cy="asset-image"
          alt={current.title}
          src={formatIpfsImg(current.img)}
          blurDataURL={formatIpfsImg(current.img)}
          layout={'fill'}
          objectFit="contain"
          placeholder="blur"
        />
      </Styles.ImageContainer>
    );
  }, [current]);

  if (!isArray) return currentAsset;
  return (
    <Grid display="flex" flexDirection={'column'} alignItems={'center'}>
      {currentAsset}
      <Grid display="flex" alignItems="center">
        {assets.map((asset, i) => (
          <Grid key={i} display="flex" justifyContent="center">
            {i > 0 && <div style={{ width: 8, height: 8 }} />}
            <Styles.ImageThumb selected={selected === i} onClick={() => setSelected(i)}>
              <Image
                data-cy="asset-image"
                alt={asset.title}
                src={formatIpfsImg(asset.img)}
                blurDataURL={formatIpfsImg(asset.img)}
                layout={'fixed'}
                width={isSmallDevice ? '50px' : '60px'}
                height={isSmallDevice ? '70px' : '80px'}
                objectFit="contain"
                placeholder="blur"
              />
            </Styles.ImageThumb>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default memo(Asset);
