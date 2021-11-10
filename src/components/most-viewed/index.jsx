import NextLink from 'next/link';
import * as Styled from './styled.js';
import { CollectionCard } from '~/components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const MostViewed = ({ list }) => {
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
        {list?.map(item => (
          <CollectionCard key={item.id} data={item} />
        ))}
      </Styled.ListContainer>
    </Styled.Container>
  );
};

export default MostViewed;
