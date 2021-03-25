import styled from 'styled-components';
import { Button, Row } from 'antd';

export const TokenWrapper = styled(Row)`
  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const StyledImage = styled.div`
  width: 480px;
  height: 480px;
  border-radius: 6px;
  background-image: url(${({ src }) => src});
  background-size: cover;
  margin-right: 30px;
  flex-shrink: 0;
`;

export const Heading = styled.p`
  font-size 30px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 10px;
`;

export const OwnerName = styled.span`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.brightBlue};
`;

export const ReadMore = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.brightBlue};
`;

export const Description = styled.p`
  font-weight: 500;
`;

export const Price = styled.span`
  font-weight: 700;
`;

export const StyledButton = styled(Button)`
  background-color: ${({ theme }) => theme.colors.brightBlue};
  width: 100%;
`;

export const InfoHeading = styled.p`
  font-weight: 700;
  border-bottom: 2px solid black;
  width: 27px;
  margin-bottom: 20px;
`;

export const InfoWrapper = styled.div`
  margin-top: auto;
`;
