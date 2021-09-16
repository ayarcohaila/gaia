import styled from 'styled-components';
import { Button, Upload, Row, Input, Avatar, List } from 'antd';

export const StyledProfileInput = styled(Input)`
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 10px;
`;

export const StyledProfileTextArea = styled(Input)`
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 10px;
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
    height: 300px;
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
    margin-right: 20px;
  }
`;

export const ProfileWrapper = styled(Row)`
  .token-card,
  .drop-down {
    margin-bottom: 20px;
  }

  .token-card {
    margin-right: 20px;
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

export const UploadWrapper = styled.div`
  margin: 0 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed #e5e8eb;
  border-radius: 10px;
  height: 194px;
`;

export const CreatorUpload = styled(Upload)`
  .ant-upload {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const CreatorUploadButton = styled(Button)`
  margin-top: 10px;
`;

export const NewAttrButton = styled(CreatorUploadButton)`
  width: 90%;
`;

export const StyledInput = styled(Input)`
  border: 1px solid #e5e8eb;
  padding: 10px 20px;
  border-radius: 10px;
`;

export const StyledTextArea = styled(Input.TextArea)`
  border: 1px solid #e5e8eb;
  padding: 10px 20px;
  border-radius: 10px;
  height: 239px;
  resize: none;
`;

export const SubmitButton = styled(Button)`
  width: 90%;
  height: 48px;
`;

export const Centralizer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CreateNFTWrapper = styled(Row)`
  margin: 30px auto;

  .token-card {
    margin: 0 20px 20px 0;
  }
`;

export const ProfileInfo = styled(Avatar)`
  border: solid 2px;
`;

export const Banner = styled.div`
  width: 100%;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;

  h3 {
    color: ${({ theme }) => theme.colors.white};
    margin: 10px 0;
  }
`;

export const ImagePreview = styled.img`
  width: 270px;
  height: 270px;
  object-fit: cover;
`;

export const ListContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  margin-left: 8vw;
  justify-content: center;
  width: 100%;
  @media (max-width: 500px) {
    margin-left: 16vw;
  }
  @media (min-width: 501px) and (max-width: 720px) {
    margin-left: 20vw;
  }
  @media (min-width: 769px) and (max-width: 1000px) {
    margin-left: 14vw;
  }
  @media (min-width: 1001px) and (max-width: 1200px) {
    margin-left: 6vw;
  }
  @media (min-width: 1201px) and (max-width: 1500px) {
    margin-left: 4vw;
  }
  @media (min-width: 1501px) and (max-width: 1800px) {
    margin-left: 2vw;
  }
`;

export const PaginationStyled = styled(List)`
  .ant-list-pagination {
    margin-bottom: 8px;
    margin-right: 2vw;
  }
`;
