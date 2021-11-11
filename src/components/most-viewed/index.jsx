import { useMemo } from 'react';
import Slider from 'react-slick';
import NextLink from 'next/link';

import { useBreakpoints } from '~/hooks';
import { CollectionCard } from '~/components';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MOCKED_LIST } from './constant';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import * as Styled from './styled.js';

const SLIDER_SETTINGS = {
  dots: false,
  autoplay: false,
  centerMode: false,
  arrows: false,
  variableWidth: true,
  speed: 500,
  infinite: true
};

const MostViewed = () => {
  const { isMediumDevice } = useBreakpoints();

  const list = useMemo(
    () =>
      MOCKED_LIST.map((item, index) => {
        return (
          <CollectionCard
            key={`${item?.id}-${index}`}
            data={item}
            containerProps={{
              marginRight: isMediumDevice ? '16px' : 0
            }}
          />
        );
      }),
    [isMediumDevice]
  );

  return (
    <Styled.Container>
      <Styled.ContainerHeader>
        <Styled.Title>Most Popular NFTs</Styled.Title>
        <Styled.LinkContent>
          <NextLink href="/">View More</NextLink>
          <KeyboardArrowRightIcon />
        </Styled.LinkContent>
      </Styled.ContainerHeader>
      {isMediumDevice ? (
        <Styled.SliderContainer>
          <Slider centerPadding={'20px'} {...SLIDER_SETTINGS}>
            {list}
          </Slider>
        </Styled.SliderContainer>
      ) : (
        <Styled.ListContainer>{list}</Styled.ListContainer>
      )}
    </Styled.Container>
  );
};

export default MostViewed;
