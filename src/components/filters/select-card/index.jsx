import { memo } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

const SelectCard = ({ title }) => {
  const {
    palette: { primary, white }
  } = useTheme();

  return (
    <Grid bgcolor={primary.main} borderRadius="16px" mt={6} p="8px 16px">
      <Typography color={white.main}>{title}</Typography>
    </Grid>
  );
};

SelectCard.propTypes = {
  title: PropTypes.string.isRequired
};

export default memo(SelectCard);
