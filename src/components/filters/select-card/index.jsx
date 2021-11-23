import { memo } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const SelectCard = ({ containerProps, isSelected, label, labelProps, renderIcon, ...props }) => {
  const {
    palette: { grey, primary, white }
  } = useTheme();
  const iconColor = isSelected ? primary.main : grey[400];

  return (
    <Styled.Container
      bgcolor={isSelected ? primary.main : grey[200]}
      container
      wrap="nowrap"
      {...containerProps}>
      <Grid alignItems="center" container>
        {!!renderIcon(isSelected, iconColor) && (
          <Styled.IconContainer>{renderIcon(isSelected)}</Styled.IconContainer>
        )}
        <Typography
          color={isSelected ? white.main : grey[700]}
          fontWeight="bold"
          ml={1.5}
          variant="subtitle1"
          {...labelProps}>
          {label}
        </Typography>
      </Grid>
      <Styled.Checkbox checked={isSelected} {...props} />
    </Styled.Container>
  );
};

SelectCard.propTypes = {
  containerProps: PropTypes.object,
  renderIcon: PropTypes.func,
  label: PropTypes.string.isRequired,
  labelProps: PropTypes.object,
  isSelected: PropTypes.bool
};

SelectCard.defaultProps = {
  containerProps: {},
  labelProps: {},
  renderIcon: () => null,
  isSelected: false
};

export default memo(SelectCard);
