import { memo } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { Check as CheckedIcon } from '@mui/icons-material';

import * as Styled from './styles';

const CheckboxCard = ({
  containerProps,
  isSelected,
  label,
  labelProps,
  onChange,
  renderIcon,
  ...props
}) => {
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
      <Styled.Checkbox
        checkedIcon={<CheckedIcon fontSize="4px" />}
        checked={isSelected}
        onChange={onChange}
        {...props}
      />
      <Styled.ClickableArea onClick={onChange} />
    </Styled.Container>
  );
};

CheckboxCard.propTypes = {
  containerProps: PropTypes.object,
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  labelProps: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  renderIcon: PropTypes.func
};

CheckboxCard.defaultProps = {
  containerProps: {},
  labelProps: {},
  renderIcon: () => null
};

export default memo(CheckboxCard);
