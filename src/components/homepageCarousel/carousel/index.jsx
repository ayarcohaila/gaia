import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  centerMode: true,
  centerPadding: '90px',
  arrows: true,
  responsive: [
    {
      breakpoint: 1135,
      settings: {
        centerPadding: 0,
        arrows: false,
        centerMode: false
      }
    }
  ]
};

export default function SlickCarousel({ children }) {
  return <SlickSlider {...settings}>{children}</SlickSlider>;
}
