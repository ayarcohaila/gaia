import styled from 'styled-components';
import { Box } from '@mui/material';

const BannerStyled = styled(Box)`
  width: 90%;
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
  background-color: #4814a6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  span {
    margin: 0 6px 0 0;
    opacity: 0.8;
    font-family: IBMPlexMono;
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.33;
    letter-spacing: 0.3px;
  }
`;

export { BannerStyled, Divider, BannerAccountStyled };
