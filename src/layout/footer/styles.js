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
  transform: translate(-108px, -2px);
  width: 100px;
`;
