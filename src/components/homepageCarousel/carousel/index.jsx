import SlickSlider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  centerMode: true,
  centerPadding: '100px',
  arrows: true,
  responsive: [
    {
      breakpoint: 1135,
      settings: {
        centerPadding: '30px',
        arrows: false,
        centerMode: true
      }
    }
  ]
};

export default function SlickCarousel({ children }) {
  return <SlickSlider {...settings}>{children}</SlickSlider>;
}
