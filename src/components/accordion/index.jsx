import { AccordionSummary, AccordionDetails, Divider, Typography, useTheme } from '@mui/material';
import { ArrowDropDown as ExpandMoreIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Accordion = ({ children, dividerSx, title, ...props }) => {
  const {
    palette: { grey }
  } = useTheme();

  return (
    <>
      <Divider sx={{ border: 0, borderTop: `2px solid ${grey[200]}`, ...dividerSx }} />
      <Styled.Accordion {...props}>
        <AccordionSummary
          aria-controls={title}
          expandIcon={<ExpandMoreIcon htmlColor={grey[600]} />}
          id={title}>
          <Typography color={grey[650]} variant="h5">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>{children}</AccordionDetails>
      </Styled.Accordion>
    </>
  );
};

Accordion.propTypes = {
  children: PropTypes.node,
  dividerSx: PropTypes.object,
  title: PropTypes.string
};

Accordion.defaultProps = {
  children: null,
  dividerSx: {},
  title: ''
};

export default Accordion;
