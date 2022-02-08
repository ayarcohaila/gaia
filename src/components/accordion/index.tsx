import { useState } from 'react';
import { Typography, useTheme } from '@mui/material';
import { ArrowDropDown as ExpandMoreIcon } from '@mui/icons-material';
import { capitalize } from '~/utils/string';

import * as Styled from './styles';
import { AccordionProps } from './types';
import { PropsWithChildren } from 'react';

const Accordion = ({
  contentSx,
  children,
  dividerSx,
  hasDivider,
  title,
  ...props
}: PropsWithChildren<AccordionProps>) => {
  const [expanded, setExpanded] = useState(false);
  const {
    palette: { grey }
  } = useTheme();

  return (
    <>
      {hasDivider && <Styled.Divider dividerSx={dividerSx} />}

      <Styled.Accordion {...props}>
        <Styled.AccordionSummary
          aria-controls={title}
          expandIcon={<ExpandMoreIcon htmlColor={grey[expanded ? 700 : 600]} />}
          id={`${title}_summary`}
          data-cy={`accordion-summary-${title}`}
          onClick={() => setExpanded(!expanded)}>
          <Typography color={grey[700]} variant="h5" fontWeight="600">
            {capitalize(title)}
          </Typography>
        </Styled.AccordionSummary>
        <Styled.AccordionDetails sx={contentSx}>{children}</Styled.AccordionDetails>
      </Styled.Accordion>
    </>
  );
};

Accordion.defaultProps = {
  contentSx: {},
  children: null,
  dividerSx: {},
  hasDivider: true,
  title: ''
};

export default Accordion;
