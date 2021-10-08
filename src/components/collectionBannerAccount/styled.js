import styled from 'styled-components';
import { Typography } from '@mui/material';

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

export { BannerAccountStyled, BannerName };
