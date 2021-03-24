import styled from 'styled-components';

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

export const CardImage = styled.div`
  width: 100%;
  height: 182px;
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: auto 100%;
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
