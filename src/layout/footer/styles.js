import styled from 'styled-components';
import { Link } from '@mui/material';

export const CustomLink = styled(Link).attrs({ underline: 'none', variant: 'subtitle2' })`
  color: ${({ theme }) => theme.palette.grey[600]};
  display: block;

  &:hover {
    color: white;
  }
`;
