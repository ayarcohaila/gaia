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
  font-size: 30px;
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

export const CreateNFTWrapper = styled(Row)`
  margin: 30px auto;

  .form-row {
    width: 90%;
    height: 44px;
    border: 1px solid #e5e8eb;
    padding: 10px 20px;

    border-radius: 10px;

    margin: 5px 0;
  }

  .form-row-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .no-borders {
    border: 0 !important;
  }

  .no-margin {
    margin: 0 !important;
  }

  .form-upload-row {
    height: 194px;

    border: 1px dashed #e5e8eb;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
  }

  .form-item-align {
    margin: 0;
  }

  .form-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .upload-button {
    margin-top: 10px;
  }

  .form-textarea-row {
    height: 139px !important;
    resize: none;
  }

  .ant-input-number-input-wrap {
    width: 100%;
  }

  .ant-input-number-input {
    padding: 0;
  }

  .form-submit-button {
    width: 100%;
    height: 48px;

    margin-top: 20px;
  }

  .preview-image {
    min-height: 100%;
    max-height: 300px;
    width: auto;
    margin: 0 auto;
  }

  .preview-meta {
    width: 240px;

    .ant-card-meta-title {
      font-family: Work Sans;
      font-size: 14px;
      color: rgba(120, 123, 126, 1);
      margin: 0;
    }

    .ant-card-meta-description {
      font-family: Work Sans;
      font-size: 14px;
      color: black;
      margin: 0;
    }
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
