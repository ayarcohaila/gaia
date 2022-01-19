import {
  Accordion as MuiAccordion,
  styled,
  Divider as MuiDivider,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary
} from '@mui/material';

export const Accordion = styled(MuiAccordion)(() => ({
  border: 0,
  boxShadow: 'none',

  minHeight: 0,

  '&::before': {
    display: 'none'
  }
}));

export const Divider = styled(MuiDivider, { shouldForwardProp: prop => prop !== 'dividerSx' })(
  ({ theme, dividerSx }) => ({
    border: 0,
    borderTop: `2px solid ${theme.palette.grey[200]}`,
    ...dividerSx
  })
);

export const AccordionDetails = styled(MuiAccordionDetails)(props => ({
  ...props.contentSx
}));

export const AccordionSummary = styled(MuiAccordionSummary)(() => ({
  marginBottom: '-10px'
}));
