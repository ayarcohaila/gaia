import { Button } from 'antd';
import React from 'react';
import CustomImg from '../shared/CustomImg';
import { BannerImgContainer, BannerStyled, BannerSubTitle, BannerTitle } from './BannerStyled.js';

function Banner() {
  return (
    <>
      <BannerImgContainer>
        <CustomImg alt="banner" src="/static/img/home-banner.png" />
      </BannerImgContainer>
      <BannerStyled>
        <BannerTitle type="secondary">The largest NFT marketplace</BannerTitle>
        <BannerSubTitle>Buy, sell, and discover rare digital items</BannerSubTitle>
        <Button onClick={() => alert('create an nft ')} type="primary" shape="round">
          Create an NFT
        </Button>
      </BannerStyled>
    </>
  );
}

export default Banner;
