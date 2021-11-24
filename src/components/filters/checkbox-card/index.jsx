import { memo, useCallback } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import { Check as CheckedIcon } from '@mui/icons-material';

import * as Styled from './styles';
import { ACTION_TYPE } from '../reducer';

const CheckboxCard = ({
  containerProps,
  dispatch,
  id,
  filterName,
  label,
  labelProps,
  renderIcon,
  selectedOptions,
  ...props
}) => {
  const {
    palette: { grey, primary, white }
  } = useTheme();
  const isSelected = selectedOptions.includes(id);
  const iconColor = isSelected ? primary.main : grey[400];

  const handleSelect = useCallback(() => {
    dispatch({
      type: ACTION_TYPE.SET_FILTER,
      payload: {
        filter: filterName,
        value: selectedOptions.includes(id)
          ? selectedOptions.filter(filter => filter !== id)
          : [...selectedOptions, id]
      }
    });
  }, [filterName, id, selectedOptions]);

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
        onChange={handleSelect}
        {...props}
      />
      <Styled.ClickableArea onClick={handleSelect} />
    </Styled.Container>
  );
};

CheckboxCard.propTypes = {
  containerProps: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  filterName: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelProps: PropTypes.object,
  renderIcon: PropTypes.func,
  selectedOptions: PropTypes.arrayOf(PropTypes.string)
};

CheckboxCard.defaultProps = {
  containerProps: {},
  filterName: '',
  labelProps: {},
  renderIcon: () => null,
  selectedOptions: []
};

export default memo(CheckboxCard);
