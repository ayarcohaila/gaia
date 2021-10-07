import styled, { css, keyframes } from 'styled-components';

const brieflyShowBorder = keyframes`
  33% {
    border: 1px solid #0057ff;
  }
  100% {
    border: 1px solid #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 8px;
  padding: 8px 10px;
  width: 152px;
  height: 45px;
  border-radius: 8px;
  background-color: #402086;
  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  ${({ isFocused }) =>
    isFocused &&
    css`
      animation: 3s ${brieflyShowBorder} ease-out;
    `}
`;

export const Text = styled.p`
  width: 78px;
  height: 16px;
  margin: 0 8px 0 0;
  font-size: 14px;
  font-family: 'IBMPlexMono';
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 0.2px;
  color: #fff;
`;
