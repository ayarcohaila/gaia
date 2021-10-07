import styled from 'styled-components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export const Banner = styled(Box)`
  width: 95.6%;
  height: 210px;
  margin: 0px 32px;
  border-radius: 40px;
  background-color: #11042d;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(189deg, rgba(65, 31, 126, 0.2) 20%, #411f7e 93%);
  align-items: center;
  flex-direction: column;
  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin: 10px 0;
  }
`;

export const ProfileInfo = styled(Typography)`
  width: 100%;
  height: 60px;
  margin: 0 0 20px;
  font-family: 'IBMPlexMono';
  font-size: 56px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.07;
  letter-spacing: -1px;
  text-align: center;
  color: #fff;
`;

export const BoxWallet = styled(Box)`
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const WalletText = styled(Typography)`
  width: 60px;
  height: 16px;
  margin: 8px 0px 8px 0;
  opacity: 0.8;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: right;
  color: #fff;
`;
