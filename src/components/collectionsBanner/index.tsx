import React, { memo } from 'react';
import { Grid } from '@mui/material';
import Image from 'next/image';

import * as Styled from './styles';

function CollectionsBanner() {
  return (
    <>
      <Styled.BannerBackground>
        <Styled.BannerBackgroundShadow>
          <Styled.BannerContent container direction="column" justifyContent="space-between">
            <Styled.ImgContainer>
              <Image src="/static/img/nba-top-shot.png" layout="fill" objectFit="contain" />
            </Styled.ImgContainer>

            <Grid>
              <Styled.Title variant="h1">Sports NFT</Styled.Title>
              <Styled.SubTitle variant="h4" mt={1}>
                Focusing on the top brands in football, soccer, boxing and more
              </Styled.SubTitle>
            </Grid>
          </Styled.BannerContent>
        </Styled.BannerBackgroundShadow>
      </Styled.BannerBackground>
    </>
  );
}

export default memo(CollectionsBanner);
