import styled from 'styled-components';
import { Link } from '@mui/material';

import { Button } from '~/base';
import { SearchInput } from '~/components';

export const CustomLink = styled(Link).attrs({ underline: 'none', variant: 'subtitle2' })`
  color: ${({ theme }) => theme.palette.grey[600]};
  display: block;

  &:hover {
    color: white;
  }
`;

export const Input = styled(SearchInput)`
  background-color: ${({ theme }) => theme.palette.grey[700]};
  border-radius: 28px;
  border: ${({ theme, error }) => (error ? `2px solid ${theme.palette.error.dark}` : 'none')};
  height: 50px;

  & > .MuiInput-input {
    ${({ theme: { typography } }) => typography.subtitle1}
    color: ${({ theme }) => theme.palette.grey[500]};
  }

  & > .MuiInput-input::placeholder {
    color: ${({ theme: { palette } }) => palette.grey[600]};
  }

  &:hover > .MuiInput-input::placeholder {
    color: ${({ theme: { palette } }) => palette.grey[500]};
  }
`;

export const CustomButton = styled(Button)`
  height: 40px;
  transform: translateX(8px);
  width: 130px;
`;

export const DiscordIcon = styled.img`
  height: 20px;
  transform: translateY(-3.5px);
  width: 20px;
`;
