import { Accordion as MuiAccordion, styled } from '@mui/material';

export const Accordion = styled(MuiAccordion)(() => ({
  border: 0,
  boxShadow: 'none',

  '&::before': {
    display: 'none'
  }
}));
