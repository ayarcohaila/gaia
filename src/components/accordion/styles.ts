import {
  Accordion as MuiAccordion,
  Divider as MuiDivider,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary
} from '@mui/material';
import { styled } from '~/themes/styled';
import { AccordionProps } from './types';

export const Accordion = styled(MuiAccordion)(() => ({
  border: 0,
  boxShadow: 'none',

  minHeight: 0,

  '&::before': {
    display: 'none'
  }
}));

export const Divider = styled(MuiDivider, { shouldForwardProp: prop => prop !== 'dividerSx' })<{
  dividerSx: AccordionProps['dividerSx'];
}>(({ theme, dividerSx }) => ({
  border: 0,
  borderTop: `2px solid ${theme.palette.grey[200]}`,
  ...dividerSx
}));

export const AccordionDetails = styled(MuiAccordionDetails)<{
  contentSx?: AccordionProps['contentSx'];
}>(props => ({
  ...props.contentSx
}));

export const AccordionSummary = styled(MuiAccordionSummary)(() => ({
  marginBottom: '-10px'
}));
