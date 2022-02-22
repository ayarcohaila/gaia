import {
  Accordion as MuiAccordion,
  Divider as MuiDivider,
  AccordionDetails as MuiAccordionDetails,
  AccordionSummary as MuiAccordionSummary
} from '@mui/material';
import { styled } from '~/themes/styled';
import { AccordionProps } from './types';

export const Accordion = styled(MuiAccordion)(() => ({
  width: '100%',
  border: 0,
  boxShadow: 'none',

  minHeight: 0,

  '&.MuiAccordion-root:first-of-type': {
    borderTopLeftRadius: '16px',
    borderTopRightRadius: '16px'
  },

  '&.MuiAccordion-root:last-of-type': {
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px'
  },

  '&::before': {
    display: 'none'
  },

  '&.Mui-expanded': {
    margin: 0
  }
}));

export const Divider = styled(MuiDivider, { shouldForwardProp: prop => prop !== 'dividerSx' })<{
  dividerSx: AccordionProps['dividerSx'];
}>(({ theme, dividerSx }) => ({
  border: 0,
  borderTop: `1px solid ${theme.palette.grey[300]}`,
  ...dividerSx
}));

export const AccordionDetails = styled(MuiAccordionDetails)<{
  contentSx?: AccordionProps['contentSx'];
}>(({ theme, contentSx }) => ({
  '&.MuiAccordionDetails-root': {
    padding: '0 12px 0 12px',
    maxHeight: '500px',
    overflowX: 'hidden',
    overflowY: 'overlay',
    margin: '0 10px 10px 0',

    '&::-webkit-scrollbar': {
      width: '5px'
    },

    '&-webkit-scrollbar-track': {
      background: theme.palette.grey[200]
    },

    '&::-webkit-scrollbar-thumb': {
      background: theme.palette.grey[300],
      borderRadius: '4px'
    },

    '&::-webkit-scrollbar-thumb:hover': {
      background: theme.palette.grey[400]
    }
  },
  ...contentSx
}));

export const AccordionSummary = styled(MuiAccordionSummary)(() => ({
  marginBottom: '0',

  '.MuiAccordionSummary-content': {
    paddingLeft: '8px',
    '&.Mui-expanded': {
      margin: '16px 0'
    }
  },

  '&.MuiButtonBase-root': {
    padding: '0 22px 0 12px',
    minHeight: '60px'
  }
}));
