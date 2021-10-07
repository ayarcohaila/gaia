import styled from 'styled-components';
import { Box } from '@mui/system';
import { Avatar } from 'antd';

export const Banner = styled(Box)`
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(189deg, #411f7e 20%, rgba(65, 31, 126, 0.2) 93%);
  align-items: center;
  flex-direction: column;
  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin: 10px 0;
  }
`;

export const ProfileInfo = styled(Avatar)`
  border: solid 2px;
`;
