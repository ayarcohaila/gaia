import NextLink from 'next/link';
import * as Styled from './styled.js';
import { CollectionCard } from '~/components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MOCKED_LIST } from './constant';
const MostViewed = () => {
  return (
    <Styled.Container>
      <Styled.ContainerHeader>
        <Styled.Title>Most Popular NFTs</Styled.Title>
        <Styled.LinkContent>
          <NextLink href="/">View More</NextLink>
          <KeyboardArrowRightIcon />
        </Styled.LinkContent>
      </Styled.ContainerHeader>
      <Styled.ListContainer>
        {MOCKED_LIST.map((item, index) => (
          <CollectionCard key={`${item?.id}-${index}`} data={item} />
        ))}
      </Styled.ListContainer>
    </Styled.Container>
  );
};

export default MostViewed;
