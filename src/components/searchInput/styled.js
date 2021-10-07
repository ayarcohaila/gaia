import { Input } from '@mui/material';
import styled from 'styled-components';

export const Search = styled(Input)`
  width: 305px;
  height: 40px;
  border: none;
  margin-left: auto;
  padding: 12px 16px 12px 20px;
  border-radius: 20px;
  background-color: ${({ theme: { palette } }) => palette.grey[300]};
  cursor: pointer;

  & > .MuiInput-input {
    ${({ theme: { typography } }) => typography.subtitle1}
    font-weight: bold;
    color: ${({ theme: { palette } }) => palette.grey[700]};
    cursor: pointer;
  }

  & > .MuiInput-input::placeholder {
    color: ${({ theme: { palette } }) => palette.grey[600]};
  }

  &:hover > .MuiInput-input::placeholder {
    color: ${({ theme: { palette } }) => palette.grey[700]};
    opacity: 1;
  }
`;
