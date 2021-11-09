import {
  Accordion as MuiAccordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

const Accordion = ({ children, title, ...props }) => {
  return (
    <MuiAccordion {...props}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={title} id={title}>
        <Typography>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </MuiAccordion>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string
};

Accordion.defaultProps = {
  children: null,
  title: ''
};

export default Accordion;
