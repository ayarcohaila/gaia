import { Box } from '@mui/system';
import styled, { css, keyframes } from 'styled-components';

const brieflyShowBorder = keyframes`
  33% {
    border: 1px solid #0057ff;
  }
  100% {
    border: 1px solid #fff;
  }
`;

export const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 0 8px;
  padding: 8px 12px;
  width: 8.8rem;
  height: 2.4rem;
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
  width: 100%;
  height: 16px;
  margin: 0 8px 0 0;
  font-family: 'IBMPlexMono';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 0.2px;
  color: #fff;
`;

export const RectangleContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 40px;
  margin-bottom: 0.25rem;
`;

export const RectangleTop = styled(Box)`
  width: 5px;
  height: 7px;
  margin: 3px 3px 0 3px;
  border-radius: 1px;
  box-shadow: 0 0 0 0.8px #fff, inset 0 0 0 0.8px #fff, 0 0 0 2.3px #402086,
    inset 0 0 0 2.3px #402086;
  background-color: #402086;
`;

export const RectangleBottom = styled(Box)`
  width: 5px;
  height: 7px;
  margin: -3px 3px 0 0;
  border-radius: 1px;
  box-shadow: 0 0 0 0.8px #fff, inset 0 0 0 0.8px #fff, 0 0 0 2.3px #402086,
    inset 0 0 0 2.3px #402086;
  background-color: #402086;
`;
