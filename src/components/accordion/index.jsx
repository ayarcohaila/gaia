import { Typography, useTheme } from '@mui/material';
import { ArrowDropDown as ExpandMoreIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const Accordion = ({ contentSx, children, dividerSx, hasDivider, title, ...props }) => {
  const {
    palette: { grey }
  } = useTheme();

  return (
    <>
      {hasDivider && <Styled.Divider dividerSx={dividerSx} />}

      <Styled.Accordion {...props}>
        <Styled.AccordionSummary
          aria-controls={title}
          expandIcon={<ExpandMoreIcon htmlColor={grey[600]} />}
          id={`${title}_summary`}
          data-cy={`accordion-summary-${title}`}>
          <Typography color={grey[650]} variant="h5">
            {title}
          </Typography>
        </Styled.AccordionSummary>
        <Styled.AccordionDetails sx={contentSx}>{children}</Styled.AccordionDetails>
      </Styled.Accordion>
    </>
  );
};

Accordion.propTypes = {
  contentSx: PropTypes.object,
  children: PropTypes.node,
  dividerSx: PropTypes.object,
  hasDivider: PropTypes.bool,
  title: PropTypes.string
};

Accordion.defaultProps = {
  contentSx: {},
  children: null,
  dividerSx: {},
  hasDivider: true,
  title: ''
};

export default Accordion;
