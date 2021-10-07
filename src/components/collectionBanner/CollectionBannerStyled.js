import styled from 'styled-components';
import { Box, Typography } from '@mui/material';

const BannerBackground = styled.div`
  width: 100%;
  min-height: 420px;
  background-image: url(${props => props.imgUrl});
  border-radius: 40px;
  background-size: cover;
`;

const BannerStyled = styled(Box)`
  width: 100%;
  min-height: 420px;
  padding: 48px;
  background-image: radial-gradient(
    circle at 91% 0,
    rgba(39, 11, 90, 0),
    rgba(39, 11, 90, 0.06) 22%,
    ${props => props.bgColor} 81%
  );
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const Divider = styled.div`
  width: 2px;
  height: 56px;
  margin: 12px 32px;
  opacity: 0.12;
  background-color: #fff;
`;

const BannerAccountStyled = styled.div`
  width: 113px;
  height: 24px;
  margin: 8px 0 0;
  padding: 4px 8px;
  border-radius: 6px;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  span {
    margin: 0 6px 0 0;
    opacity: 0.8;
    font-family: IBM Plex Mono;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.3px;
  }
`;

const BannerName = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #fff;
`;

const BannerDescription = styled(Typography)`
  max-width: 400px;
  opacity: 0.8;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: #fff;
`;

const BannerItemDescription = styled(Typography)`
  opacity: 0.64;
  font-size: 13px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.23;
  letter-spacing: 0.2px;
  color: #fff;
`;

const BannerItemValue = styled(Typography)`
  font-size: 20px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: normal;
  color: #fff;

  span {
    line-height: 1.43;
    font-size: 14px;
  }
`;

const BannerShareIconStyled = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BannerAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 1px solid #fff;
  background-image: url(${props => props.imgUrl});
`;

export {
  BannerStyled,
  Divider,
  BannerAccountStyled,
  BannerName,
  BannerDescription,
  BannerItemDescription,
  BannerItemValue,
  BannerShareIconStyled,
  BannerBackground,
  BannerAvatar
};
