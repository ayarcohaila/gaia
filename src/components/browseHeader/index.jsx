import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { BurstIcon } from '~/base';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Breadcrumbs } from '~/components';

import * as Styled from './styles';
import { useBreakpoints } from '~/hooks';

const Header = ({
  handleShowFilters,
  showFilter,
  orderByUpdate,
  handleOrderByUpdate,
  totalShowing
}) => {
  const { isMediumDevice } = useBreakpoints();

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
          <Styled.CustomButton onClick={handleOrderByUpdate} active={orderByUpdate}>
            <Styled.Text>Most recent</Styled.Text>
            <ArrowDropDownRoundedIcon />
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
  orderByUpdate: PropTypes.bool.isRequired,
  handleOrderByUpdate: PropTypes.func.isRequired
};

Header.defaultProps = {
  totalShowing: 0
};

export default React.memo(Header);
