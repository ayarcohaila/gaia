import styled from 'styled-components';
import { Button as MuiButton } from '@mui/material';

export const Button = styled(MuiButton)`
  ${({ theme: { typography } }) => typography.subtitle1}
  background-color: ${({ theme }) => theme.palette.primary.dark};
  border-radius: 24px;
  font-weight: bold;
  color: white;
  padding: 16px 22px;
  text-transform: none;

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.grey[400]};
    color: ${({ theme }) => theme.palette.grey[600]};
  }
`;
