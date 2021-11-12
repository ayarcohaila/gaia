import { Accordion as MuiAccordion, styled } from '@mui/material';

export const Accordion = styled(MuiAccordion)(() => ({
  border: 0,
  boxShadow: 'none',
  maxHeight: '530px',

  '&::before': {
    display: 'none'
  }
}));
