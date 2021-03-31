import styled from 'styled-components';
import { Button, Row, Avatar } from 'antd';

export const Card = styled.div`
  width: 193px;
  height: 275px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.borderGray};
  overflow: hidden;
  position: relative;
  cursor: pointer;

  .text-content {
    display: flex;
    padding: 7px;
    height: auto;
  }
`;

export const StyledAvatar = styled(Avatar)`
  margin: 7px;
`;

export const CardImage = styled.div`
  width: 100%;
  height: 182px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
`;

export const PriceContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 7px;
  right: 7px;
`;

export const ContentContainer = styled.div`
  width: 67%;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 15px;
`;

export const Collection = styled(Text)`
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const Price = styled(Text)`
  font-weight: 700;
  margin-left: 5px;
`;

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
  font-size: 30px;
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
