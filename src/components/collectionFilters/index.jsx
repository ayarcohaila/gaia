import React, { useState, useRef, useCallback, useMemo, useEffect } from 'react';
import { Search as SearchIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { Hidden } from '@mui/material';
import { useRouter } from 'next/router';
import Dropdown from '~/base/dropdown';
import SearchInput from '~/base/searchInput';
import BurstIcon from '~/base/burstIcon';
import useBreakpoints from '~/hooks/useBreakpoints';
import useCollectionConfig from '~/hooks/useCollectionConfig';
import { ORDER_MENU_IDS } from './constants';
import * as Styled from './styles.js';
import { useAuthContext } from '~/providers/AuthProvider';

const ESC_KEY = 27;

const CollectionsFilter = ({
  nftQuantity,
  enableSort,
  enableSearch,
  setNftList,
  isProfile,
  onSearch = () => {},
  sx
}) => {
  const searchInput = useRef(null);
  const orderButtonRef = useRef(null);
  const [isMenuOrderOpen, setIsMenuOrderOpen] = useState(false);
  const [selectedOrderButton, setSelectedOrderButton] = useState(ORDER_MENU_IDS.SORT_BY);
  const [isSearching, setIsSearching] = useState(false);
  const { isMediumDevice } = useBreakpoints();
  const { user } = useAuthContext();
  const {
    query: { id: pathAddress }
  } = useRouter();
  const isOwnProfile = pathAddress === user?.addr;

  const toggleMenuOrder = () => {
    setIsMenuOrderOpen(prevState => !prevState);
  };

  const { config } = useCollectionConfig();

  const handleClickOption = useCallback(
    ({
      target: {
        dataset: { id }
      }
    }) => {
      const currentId = Number(id);
      setNftList(prevState => {
        switch (currentId) {
          case ORDER_MENU_IDS.LOWEST_PRICE:
            return [...prevState.sort((a, b) => Number(a?.price) - Number(b?.price))];
          case ORDER_MENU_IDS.HIGHEST_PRICE:
            return [...prevState.sort((a, b) => Number(b?.price) - Number(a?.price))];
          case ORDER_MENU_IDS.LOWEST_MINT:
            return [...prevState.sort((a, b) => Number(a?.mint) - Number(b?.mint))];
          case ORDER_MENU_IDS.HIGHEST_MINT:
            return [...prevState.sort((a, b) => Number(b?.mint) - Number(a?.mint))];
          default:
            return prevState;
        }
      });
      setSelectedOrderButton(currentId);
      toggleMenuOrder();
      setSelectedOrderButton(currentId);
      toggleMenuOrder();
    },
    [setSelectedOrderButton, toggleMenuOrder]
  );

  const orderButton = useMemo(() => {
    const defaultOptions = [
      { id: ORDER_MENU_IDS.LOWEST_PRICE, label: 'Lowest Price' },
      { id: ORDER_MENU_IDS.HIGHEST_PRICE, label: 'Highest Price' }
    ];
    return config?.mystery
      ? defaultOptions
      : [
          ...defaultOptions,
          { id: ORDER_MENU_IDS.LOWEST_MINT, label: 'Lowest Mint' },
          { id: ORDER_MENU_IDS.HIGHEST_MINT, label: 'Highest Mint' }
        ];
  }, [config?.mystery]);

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
        <Hidden xsUp>
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
        </Hidden>
      );
    }
  }, [isSearching, toggleSearchInput]);

  return (
    <Styled.Wrapper isMobile={isMediumDevice} sx={sx} isProfile={isProfile}>
      <Styled.Container>
        <BurstIcon />
        <Styled.Text isMobile={isMediumDevice}>{`${nftQuantity} ${
          enableSearch ? 'owned' : 'available'
        }`}</Styled.Text>
      </Styled.Container>
      {isOwnProfile && isProfile && (
        <Styled.Message align="center">
          Please note: purchases, listings, and transfers may take 5-10 minutes to be reflected in
          your account
        </Styled.Message>
      )}
      {enableSearch
        ? renderInput
        : enableSort && (
            <Styled.OrderButton
              ref={orderButtonRef}
              disableRipple
              onClick={toggleMenuOrder}
              isSelected={isMenuOrderOpen}
              endIcon={<Styled.ArrowIcon />}>
              {orderButton.find(item => item.id === selectedOrderButton)?.label || 'Sort By'}
            </Styled.OrderButton>
          )}
      <Dropdown
        menuAnchorRef={orderButtonRef}
        isOpen={!!isMenuOrderOpen}
        onClose={toggleMenuOrder}
        handleClickOption={handleClickOption}
        options={orderButton.filter(option => option.id !== selectedOrderButton)}
      />
    </Styled.Wrapper>
  );
};

CollectionsFilter.propTypes = {
  nftQuantity: PropTypes.number,
  setSort: PropTypes.func,
  handleFilter: PropTypes.func,
  enableSearch: PropTypes.bool,
  enableSort: PropTypes.bool,
  isProfile: PropTypes.bool
};

CollectionsFilter.defaultProps = {
  nftQuantity: 0,
  enableSearch: false,
  enableSort: true,
  isProfile: false
};

export default React.memo(CollectionsFilter);
