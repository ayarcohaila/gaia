import styled from 'styled-components';
import { Button, Upload, Row } from 'antd';

export const EditProfileWrapper = styled(Row)`
  .input {
    border-radius: 8px;
    padding: 8px 16px;
    margin-bottom: 10px;
  }
`;

export const Heading = styled.p`
  font-size 30px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 10px;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.brightBlue};
  width: ${({ width }) => width ?? 'auto'};
`;

export const StyledUpload = styled(Upload)`
  .ant-upload {
    width: 100%;
    height: 195px;
    border-radius: 8px;
  }
`;

export const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 20px 0 10px;
`;

export const MarketPlaceWrapper = styled(Row)`
  padding-top: 20px;

  .token-card {
    margin-bottom: 20px;
  }
`;

export const ProfileWrapper = styled(Row)`
  .token-card,
  .drop-down {
    margin-bottom: 20px;
  }

  .address {
    margin: -22.5px auto 10px;
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

export const ImagePreview = styled.img`
  width: 90%;
  height: 90%;
  object-fit: cover;
`;
