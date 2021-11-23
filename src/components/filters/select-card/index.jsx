import { memo, useCallback } from 'react';
import { Grid, Typography, useTheme } from '@mui/material';
import PropTypes from 'prop-types';

import * as Styled from './styles';

const SelectCard = ({
  containerProps,
  id,
  label,
  labelProps,
  renderIcon,
  selectedOptions,
  setSelectedOptions,
  ...props
}) => {
  const {
    palette: { grey, primary, white }
  } = useTheme();

  const isSelected = selectedOptions.includes(id);
  const iconColor = isSelected ? primary.main : grey[400];

  const handleSelect = useCallback(() => {
    setSelectedOptions(prevState =>
      prevState.includes(id) ? prevState.filter(filter => filter !== id) : [...prevState, id]
    );
  }, [id]);

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
      <Styled.Checkbox checked={isSelected} onChange={handleSelect} {...props} />
    </Styled.Container>
  );
};

SelectCard.propTypes = {
  containerProps: PropTypes.object,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  labelProps: PropTypes.object,
  renderIcon: PropTypes.func,
  selectedOptions: PropTypes.arrayOf(PropTypes.string),
  setSelectedOptions: PropTypes.func
};

SelectCard.defaultProps = {
  containerProps: {},
  labelProps: {},
  renderIcon: () => null,
  selectedOptions: [],
  setSelectedOptions: () => {}
};

export default memo(SelectCard);
