import styled from 'styled-components';
import { Button, Avatar, Typography, Skeleton, Col } from 'antd';

export const DropDownContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;

  .drop-down {
    margin-bottom: 5px !important;
    z-index: 1000;
  }
`;

export const Card = styled.div`
  width: 193px;
  height: auto;
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

  .buttons-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 10px 10px;
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
  width: ${({ fullWidth }) => (fullWidth ? '100' : '67')}%;
  height: 63px;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 15px;
`;

export const AssetDescription = styled(Typography.Paragraph)`
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 12px;
`;

export const Price = styled(Text)`
  font-weight: 700;
  margin-left: 5px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentColumn = styled(Col)`
  padding: 0 15px;
  display: flex;
`;

export const Column = styled(Col)`
  padding: 0 15px;
  display: flex;
  justify-content: center;
`;

export const ExpandedViewSkeletonParagraph = styled(Skeleton)`
  margin-bottom: 20px;
`;

export const ExpandedViewSkeletonImage = styled(Skeleton.Input)`
  width: 480px !important;
  height: 480px !important;
  border-radius: 8px;
  margin-right: 20px !important;
`;

export const ExpandedViewSkeletonInput = styled(Skeleton.Input)`
  width: 200px !important;
  height: 20px !important;
`;

export const ExpandedViewSkeletonButton = styled(Skeleton.Button)`
  width: 400px !important;
  margin-top: 20px !important;
`;

export const StyledImageContainer = styled.div`
  width: 480px;
  height: 480px;
  border-radius: 6px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled.img`
  width: 100%;
  max-width: 480px;
  max-height: 480px;
  border-radius: 6px;
  margin-right: 30px;
  object-fit: scale-down;
`;

export const Heading = styled.p`
  font-size: 30px;
  line-height: 32px;
  font-weight: 700;
  margin: 0 0 10px;
`;

export const OwnerName = styled.span`
  cursor: pointer;
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
  background-color: ${({ theme, cancel }) =>
    cancel ? theme.colors.brightRed : theme.colors.brightBlue};
  width: 100%;
  margin-top: ${props => (props.margin ? '5px' : '0px')};
  margin-bottom: ${props => (props.margin ? '5px' : '0px')};
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
