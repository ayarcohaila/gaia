import React from 'react';
import { MenuList, ClickAwayListener, Popper } from '@mui/material';
import PropTypes from 'prop-types';
import * as Styled from './styles.js';

const ESC_KEY = 27;

const Dropdown = ({
  menuAnchorRef,
  isOpen,
  onClose,
  handleListKeyDown,
  options,
  handleClickOption,
  ...otherProps
}) => {
  const defaultKeyDownPress = event => {
    if (!handleListKeyDown) {
      if (event.key === ESC_KEY) {
        onClose();
      }
    } else {
      handleListKeyDown();
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
  handleListKeyDown: PropTypes.func,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      isRed: PropTypes.bool,
      icon: PropTypes.node
    })
  )
};

Dropdown.defaultProps = {
  menuAnchorRef: undefined,
  handleListKeyDown: undefined,
  options: []
};

export default React.memo(Dropdown);
