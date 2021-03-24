import styled from 'styled-components';
import { Row } from 'antd';

export const ProfileWrapper = styled(Row)`
  .token-card {
    margin-bottom: 20px;
  }

  .address {
    margin: -22.5px auto 60px;
  }
`;

export const HomeWrapper = styled(Row)`
  .token-card {
    margin-right: 22px;
  }
`;

export const Banner = styled.div`
  width: 100%;
  height: 165px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
`;
