import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { BurstIcon } from '~/base';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import { Breadcrumbs } from '~/components';

import * as Styled from './styles';
import { useBreakpoints } from '~/hooks';

const Header = ({ handleShowFilters, showFilter, totalShowing }) => {
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
          <Styled.CustomButton>
            <Styled.Text>Most recent</Styled.Text>
            <ArrowDropDownRoundedIcon />
          </Styled.CustomButton>
        </Styled.ContainerItem>
      </Styled.MainConteiner>
    </Styled.Container>
  );
};

Header.propTypes = {
  handleShowFilters: PropTypes.func.isRequired,
  totalShowing: PropTypes.number.isRequired,
  showFilter: PropTypes.bool.isRequired
};

export default React.memo(Header);
