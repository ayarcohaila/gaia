import styled from 'styled-components';
import { Grid, Typography } from '@mui/material';

export const Container = styled(Grid)`
  max-width: 1440px;
  width: 100%;
`;

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`;
