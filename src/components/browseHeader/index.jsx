import React, { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Breadcrumbs from '~/components/breadcrumbs';
import useBreakpoints from '~/hooks/useBreakpoints';
import useToggle from '~/hooks/useToggle';
import useCollectionConfig from '~/hooks/useCollectionConfig';
import BurstIcon from '~/base/burstIcon';
import Dropdown from '~/base/dropdown';
import { ORDER_MENU_IDS } from '~/components/collectionFilters/constants';
import { useAppContext } from '~/context/appProvider';

import * as Styled from './styles';
import { COLLECTIONS_NAME } from 'collections_setup';
const Header = ({
  handleShowFilters,
  showFilter,
  totalShowing,
  available,
  withBorder,
  collectionName
}) => {
  const { isMediumDevice, isSmallDevice, isExtraMediumDevice } = useBreakpoints();
  const orderButtonRef = useRef(null);
  const [isMenuOrderOpen, toggleMenuOrder] = useToggle();
  const [selectedOrderButton, setSelectedOrderButton] = useState(ORDER_MENU_IDS.LOWEST_PRICE);
  const { handleAppData } = useAppContext();
  const { config, collectionsNames, collections } = useCollectionConfig();
  const { asPath } = useRouter();

  const handleClickOption = ({
    target: {
      dataset: { id }
    }
  }) => {
    const currentId = Number(id);
    if (currentId === ORDER_MENU_IDS.LOWEST_PRICE) {
      handleAppData({
        marketplaceSort:
          collectionName === COLLECTIONS_NAME.NFL
            ? { min_list_price: 'asc' }
            : { last_active_price: 'asc' },
        page: 0,
        marketplaceNfts: []
      });
    } else if (currentId === ORDER_MENU_IDS.HIGHEST_PRICE) {
      handleAppData({
        marketplaceSort:
          collectionName === COLLECTIONS_NAME.NFL
            ? { min_list_price: 'desc' }
            : { last_active_price: 'desc' },
        page: 0,
        marketplaceNfts: []
      });
    } else if (currentId === ORDER_MENU_IDS.OLDEST) {
      handleAppData({
        marketplaceSort:
          collectionName === COLLECTIONS_NAME.NFL ? { created_at: 'asc' } : { updated_at: 'asc' },
        page: 0,
        marketplaceNfts: []
      });
    } else {
      handleAppData({
        marketplaceSort:
          collectionName === COLLECTIONS_NAME.NFL ? { created_at: 'desc' } : { updated_at: 'desc' },
        page: 0,
        marketplaceNfts: []
      });
    }

    setSelectedOrderButton(currentId);
    toggleMenuOrder();
  };
  const breadcrumbsLinks = useMemo(
    () => [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: config?.id ? config.pageTitle : 'Browse NFTs'
      }
    ],
    []
  );

  const orderButton = useMemo(() => {
    // TODO: Temporary solution to show UI to the client
    if (config?.id === collections[collectionsNames.NFL].id && asPath !== '/browse') {
      return [
        { id: ORDER_MENU_IDS.LOWEST_PRICE, label: 'Price: Low to High' },
        { id: ORDER_MENU_IDS.HIGHEST_PRICE, label: 'Price: High to Low' },
        { id: ORDER_MENU_IDS.MOST_RECENT, label: 'Newest listings' },
        { id: ORDER_MENU_IDS.OLDEST, label: 'Oldest listings' }
      ];
    }
    return [
      { id: ORDER_MENU_IDS.MOST_RECENT, label: 'Recently Listed' },
      { id: ORDER_MENU_IDS.HIGHEST_PRICE, label: 'Highest Price' },
      { id: ORDER_MENU_IDS.LOWEST_PRICE, label: 'Lowest Price' }
    ];
  }, []);

  return (
    <Styled.Container
      withBorder={withBorder}
      isMediumDevice={isMediumDevice}
      isSmallDevice={isSmallDevice}>
      {!isMediumDevice && (
        <Styled.MainContainer>
          <Breadcrumbs links={breadcrumbsLinks} sx={{ mx: 1 }} withMargin={false} />
        </Styled.MainContainer>
      )}

      <Styled.MainContainer
        withCenter={!isSmallDevice && !isMediumDevice && (!config || !showFilter)}>
        <Styled.ContainerItem>
          <BurstIcon />
          <Styled.Text>
            Showing {totalShowing} | Total {available} NFTs
          </Styled.Text>
        </Styled.ContainerItem>

        <Styled.ContainerItem rightPosition>
          {!isMediumDevice && (
            <>
              <Styled.CustomButton onClick={handleShowFilters}>
                <Image src="/icons/TuneIcon.svg" alt="tuneIcon" width="18" height="18" />
                <Styled.Text ml="10px">{`${showFilter ? 'Hide' : 'Show'} filters`}</Styled.Text>
              </Styled.CustomButton>
              <Styled.Divider />
            </>
          )}
          <Dropdown
            menuAnchorRef={orderButtonRef}
            isOpen={!!isMenuOrderOpen}
            onClose={toggleMenuOrder}
            handleClickOption={handleClickOption}
            options={orderButton.filter(option => option.id !== selectedOrderButton)}
          />
          <Styled.CustomButton
            ref={orderButtonRef}
            disableRipple
            onClick={toggleMenuOrder}
            endIcon={<Styled.ArrowIcon />}>
            <Styled.Text>
              {orderButton.find(item => item.id === selectedOrderButton)?.label}
            </Styled.Text>
          </Styled.CustomButton>
        </Styled.ContainerItem>
      </Styled.MainContainer>
    </Styled.Container>
  );
};

Header.propTypes = {
  totalShowing: PropTypes.number,
  handleShowFilters: PropTypes.func.isRequired,
  showFilter: PropTypes.bool.isRequired,
  orderByUpdate: PropTypes.bool,
  withBorder: PropTypes.bool,
  available: PropTypes.number
};

Header.defaultProps = {
  totalShowing: 0,
  available: 0,
  withBorder: true,
  orderByUpdate: null
};

export default React.memo(Header);
