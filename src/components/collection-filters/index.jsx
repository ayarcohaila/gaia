import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Tune as TuneIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';
import SearchIcon from '@mui/icons-material/Search';

import { Dropdown, SearchInput } from '~/base';
import useBreakpoints from '~/hooks/useBreakpoints.js';

import { BUTTONS, ORDER_MENU_IDS } from './constants';
import * as Styled from './styles.js';

const ESC_KEY = 27;

const CollectionsFilter = ({ setNftList, nftQuantity, enableSearch, onSearch = () => {} }) => {
  const searchInput = useRef(null);
  const orderButtonRef = useRef(null);
  const [selectButton, setSelectButton] = useState(null);
  const [isMenuOrderOpen, setIsMenuOrderOpen] = useState(false);
  const [selectedOrderButton, setSelectedOrderButton] = useState(ORDER_MENU_IDS.LOWER);
  const [isSearching, setIsSearching] = useState(false);
  const { isMediumDevice } = useBreakpoints();

  const handleSelectOption = ({
    target: {
      dataset: { id }
    }
  }) => {
    const parseIdToNumber = Number(id);
    setSelectButton(prevState => (prevState === parseIdToNumber ? null : parseIdToNumber));
  };

  const toggleMenuOrder = () => {
    setIsMenuOrderOpen(prevState => !prevState);
  };

  const handleClickOption = useCallback(
    ({
      target: {
        dataset: { id }
      }
    }) => {
      const currentId = Number(id);
      setNftList(prevState => {
        switch (currentId) {
          case ORDER_MENU_IDS.LOWER:
            return [...prevState.sort((a, b) => Number(a?.price) - Number(b?.price))];
          case ORDER_MENU_IDS.HIGHEST:
            return [...prevState.sort((a, b) => Number(b?.price) - Number(a?.price))];
          case ORDER_MENU_IDS.RECENTLY:
            return [
              ...prevState.sort(
                (a, b) => new Date(b?.nft?.created_at) - new Date(a?.nft?.created_at)
              )
            ];
          case ORDER_MENU_IDS.OLDEST:
            return [
              ...prevState.sort(
                (a, b) => new Date(a?.nft?.created_at) - new Date(b?.nft?.created_at)
              )
            ];
          default:
            return prevState;
        }
      });
      setSelectedOrderButton(currentId);
      toggleMenuOrder();
    },
    [setSelectedOrderButton, toggleMenuOrder, setNftList]
  );

  const orderButton = [
    { id: ORDER_MENU_IDS.LOWER, label: 'Lowest Price' },
    { id: ORDER_MENU_IDS.HIGHEST, label: 'Highest Price' },
    { id: ORDER_MENU_IDS.RECENTLY, label: 'Recently Added' },
    { id: ORDER_MENU_IDS.ENDING, label: 'Ending Soon' }, // TODO: Missing implement Ending soon filter
    { id: ORDER_MENU_IDS.OLDEST, label: 'Oldest' }
  ];

  const toggleSearchInput = () => {
    setIsSearching(prevState => !prevState);
  };

  const cancelIsSearching = event => {
    if (event.keyCode === ESC_KEY && document?.activeElement === searchInput?.current) {
      toggleSearchInput();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', cancelIsSearching, false);
    return () => {
      document.removeEventListener('keydown', cancelIsSearching, false);
    };
  }, [cancelIsSearching]);

  const renderInput = useMemo(() => {
    if (isSearching || isMediumDevice) {
      return (
        <form
          onSubmit={e => {
            e.preventDefault();
            onSearch(searchInput.current.value);
          }}>
          <SearchInput
            placeholder="Search: NFT, Collection, …"
            styles={{ height: '48px', width: isMediumDevice ? '100%' : '305px' }}
            inputRef={searchInput}
            endAdornment={
              <Styled.SearchButton isSearching onClick={toggleSearchInput}>
                <SearchIcon />
              </Styled.SearchButton>
            }
            autoFocus={isSearching}
          />
          <input type="submit" style={{ position: 'absolute', left: -10000, top: -100 }} />
        </form>
      );
    }
    return (
      <Styled.SearchButton onClick={toggleSearchInput}>
        <SearchIcon />
      </Styled.SearchButton>
    );
  }, [isSearching, setIsSearching, toggleSearchInput]);

  return (
    <Styled.Wrapper isMobile={isMediumDevice}>
      <Styled.Container>
        <Styled.BurstIcon />
        <Styled.Text isMobile={isMediumDevice}>{`${nftQuantity} ${
          enableSearch ? 'owned' : 'available'
        }`}</Styled.Text>
      </Styled.Container>
      <Styled.Container space hidden>
        {Object.values(BUTTONS).map(({ label, id }) => (
          <Styled.OutlineButton
            key={id}
            variant="outline"
            data-id={id}
            isSelected={id === selectButton}
            onClick={handleSelectOption}
            endIcon={<TuneIcon />}>
            {label}
          </Styled.OutlineButton>
        ))}
      </Styled.Container>
      {enableSearch ? (
        renderInput
      ) : (
        <Styled.OrderButton
          ref={orderButtonRef}
          disableRipple
          onClick={toggleMenuOrder}
          isSelected={isMenuOrderOpen}
          endIcon={<Styled.ArrowIcon />}>
          {orderButton.find(item => item.id === selectedOrderButton)?.label}
        </Styled.OrderButton>
      )}
      <Dropdown
        menuAnchorRef={orderButtonRef}
        isOpen={isMenuOrderOpen}
        onClose={toggleMenuOrder}
        handleClickOption={handleClickOption}
        options={orderButton.filter(option => option.id !== selectedOrderButton)}
      />
    </Styled.Wrapper>
  );
};

CollectionsFilter.propTypes = {
  nftQuantity: PropTypes.number,
  setNftList: PropTypes.func,
  enableSearch: PropTypes.bool
};

CollectionsFilter.defaultProps = {
  enableSearch: false,
  setNftList: () => {},
  nftQuantity: 0
};

export default React.memo(CollectionsFilter);
