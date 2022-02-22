import React, { useEffect } from 'react';
import { MenuList, ClickAwayListener, Popper, useScrollTrigger } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './styles.js';

const ESC_KEY = 27;

const Dropdown = ({
  menuAnchorRef,
  isOpen,
  onClose,
  options,
  closeWhenScroll,
  handleClickOption,
  ...otherProps
}) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  useEffect(() => {
    if (closeWhenScroll && trigger) onClose();
  }, [trigger]);

  const defaultKeyDownPress = event => {
    if (event.keyCode === ESC_KEY) {
      onClose();
    }
  };

  return (
    <Popper anchorEl={menuAnchorRef?.current} open={isOpen} onClose={onClose}>
      <Styled.CustomPaper {...otherProps}>
        <ClickAwayListener onClickAway={onClose}>
          <MenuList autoFocus onKeyDown={defaultKeyDownPress}>
            {options.map(option => (
              <Styled.CustomMenuItem
                key={option?.label}
                onClick={handleClickOption}
                isRed={option.isRed}
                data-id={option.id}>
                <>
                  {option.icon}
                  {option.label}
                </>
              </Styled.CustomMenuItem>
            ))}
          </MenuList>
        </ClickAwayListener>
      </Styled.CustomPaper>
    </Popper>
  );
};

Dropdown.propTypes = {
  menuAnchorRef: PropTypes.shape(),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  handleClickOption: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      isRed: PropTypes.bool,
      icon: PropTypes.node
    })
  )
};

Dropdown.defaultProps = {
  closeWhenScroll: false,
  menuAnchorRef: undefined,
  options: []
};

export default React.memo(Dropdown);
