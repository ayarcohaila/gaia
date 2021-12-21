import React, { useMemo, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { BurstIcon } from '~/base';
import { Breadcrumbs } from '~/components';

import * as Styled from './styles';
import { useBreakpoints, useToggle } from '~/hooks';
import { Dropdown } from '~/base';
import { ORDER_MENU_IDS } from '~/components/collection-filters/constants';

const Header = ({ handleShowFilters, showFilter, handleOrder, totalShowing }) => {
  const { isMediumDevice } = useBreakpoints();
  const orderButtonRef = useRef(null);
  const [isMenuOrderOpen, toggleMenuOrder] = useToggle();
  const [selectedOrderButton, setSelectedOrderButton] = useState(ORDER_MENU_IDS.LOWEST_PRICE);

  const handleClickOption = ({
    target: {
      dataset: { id }
    }
  }) => {
    const currentId = Number(id);
    setSelectedOrderButton(currentId);
    handleOrder(currentId);
    toggleMenuOrder();
  };
  const breadcrumbsLinks = useMemo(
    () => [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Browse NFTs'
      }
    ],
    []
  );

  const orderButton = useMemo(() => {
    return [
      { id: ORDER_MENU_IDS.MOST_RECENT, label: 'Recently Listed' },
      { id: ORDER_MENU_IDS.HIGHEST_PRICE, label: 'Highest Price' },
      { id: ORDER_MENU_IDS.LOWEST_PRICE, label: 'Lowest Price' }
    ];
  }, []);

  return (
    <Styled.Container withBorder>
      <Styled.MainConteiner>
        {!isMediumDevice && <Breadcrumbs links={breadcrumbsLinks} sx={{ mx: 1 }} />}

        <Styled.ContainerItem>
          <BurstIcon />
          <Styled.Text>Showing {totalShowing} NFTs</Styled.Text>
        </Styled.ContainerItem>

        <Styled.ContainerItem>
          {!isMediumDevice && (
            <>
              <Styled.CustomButton onClick={handleShowFilters}>
                <Image src="/TuneIcon.svg" alt="tuneIcon" width="18" height="18" />
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
      </Styled.MainConteiner>
    </Styled.Container>
  );
};

Header.propTypes = {
  totalShowing: PropTypes.number,
  handleShowFilters: PropTypes.func.isRequired,
  showFilter: PropTypes.bool.isRequired,
  orderByUpdate: PropTypes.bool
};

Header.defaultProps = {
  totalShowing: 0,
  orderByUpdate: null
};

export default React.memo(Header);
