import {
  Accordion as MuiAccordion,
  styled,
  Divider as MuiDivider,
  AccordionDetails as MuiAccordionDetails
} from '@mui/material';

export const Accordion = styled(MuiAccordion)(() => ({
  border: 0,
  boxShadow: 'none',

  '&::before': {
    display: 'none'
  }
}));

export const Divider = styled(MuiDivider)(props => ({
  border: 0,
  borderTop: `2px solid ${props.theme.palette.grey[200]}`,
  ...props.dividerSx
}));

export const AccordionDetails = styled(MuiAccordionDetails)(props => ({
  ...props.contentSx
}));
