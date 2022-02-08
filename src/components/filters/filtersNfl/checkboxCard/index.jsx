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
  amount,
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
      <Styled.Checkbox
        checkedIcon={<CheckedIcon fontSize="4px" />}
        checked={isSelected}
        onChange={onChange}
        {...props}
      />
      <Grid alignItems="center" container>
        {!!renderIcon(isSelected, iconColor) && (
          <Styled.IconContainer>{renderIcon(isSelected, 'red')}</Styled.IconContainer>
        )}
        <Grid
          data-cy={`checkbox-card`}
          wrap="nowrap"
          ml={1.5}
          mr={'8px'}
          justifyContent="space-between"
          alignItems="center"
          container>
          <Typography
            color={isSelected ? white.main : grey[700]}
            mr={'8px'}
            fontWeight="600"
            variant="subtitle1"
            {...labelProps}>
            {label}
          </Typography>
          {amount && (
            <Typography
              color={isSelected ? white.main : grey[700]}
              variant="subtitle2"
              {...labelProps}>
              {amount}
            </Typography>
          )}
        </Grid>
      </Grid>
      <Styled.ClickableArea onClick={onChange} />
    </Styled.Container>
  );
};

CheckboxCard.propTypes = {
  containerProps: PropTypes.object,
  isSelected: PropTypes.bool.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  labelProps: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  renderIcon: PropTypes.func,
  amount: PropTypes.number
};

CheckboxCard.defaultProps = {
  containerProps: {},
  labelProps: {},
  renderIcon: () => null,
  amount: null
};

export default memo(CheckboxCard);
