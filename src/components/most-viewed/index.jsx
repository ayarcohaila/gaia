import { useMemo } from 'react';
import NextLink from 'next/link';

import { useBreakpoints } from '~/hooks';
import { CollectionCard } from '~/components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MOCKED_LIST } from './constant';

import * as Styled from './styled.js';

const MostViewed = () => {
  const { isSmallDevice, isMediumDevice } = useBreakpoints();

  const list = useMemo(() => {
    if (isSmallDevice || isMediumDevice) {
      return MOCKED_LIST.slice(0, isSmallDevice ? 4 : 6);
    }
    return MOCKED_LIST;
  }, [isSmallDevice, isMediumDevice]);

  return (
    <Styled.Container>
      <Styled.ContainerHeader>
        <Styled.Title>Most Popular NFTs</Styled.Title>
        {!isSmallDevice && (
          <Styled.LinkContent>
            <NextLink href="/">View More</NextLink>
            <KeyboardArrowRightIcon />
          </Styled.LinkContent>
        )}
      </Styled.ContainerHeader>

      <Styled.ListContainer>
        {list.map((item, index) => (
          <CollectionCard key={`${item?.id}-${index}`} data={item} />
        ))}
        {isSmallDevice && (
          <Styled.LinkContent>
            <NextLink href="/">View More</NextLink>
            <KeyboardArrowRightIcon />
          </Styled.LinkContent>
        )}
      </Styled.ListContainer>
    </Styled.Container>
  );
};

export default MostViewed;
