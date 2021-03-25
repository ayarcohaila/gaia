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
