import NextLink from 'next/link';

import { useBreakpoints } from '~/hooks';
import { CollectionCard } from '~/components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MOCKED_LIST } from './constant';

import * as Styled from './styled.js';

const MostViewed = () => {
  const { isSmallDevice } = useBreakpoints();

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
        {MOCKED_LIST.map((item, index) => (
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
