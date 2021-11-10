import { CarouselCard, Carousel } from '~/components';

const carouselItem = [
  {
    title: 'New Drop',
    description: 'NBA Top Shot Legendary Collection Available Now!',
    cardsAmount: 127,
    price: '₣500',
    logo: 'static/img/nba-top-shot.png',
    background: 'static/img/home-banner.webp'
  },
  {
    title: 'New Drop',
    description: 'NBA Top Shot Legendary Collection Available Now!',
    cardsAmount: 127,
    price: '₣500',
    logo: 'static/img/nba-top-shot.png',
    background: 'static/img/home-banner.webp'
  },
  {
    title: 'New Drop',
    description: 'NBA Top Shot Legendary Collection Available Now!',
    cardsAmount: 127,
    price: '₣500',
    logo: 'static/img/nba-top-shot.png',
    background: 'static/img/home-banner.webp'
  }
];

export default function HomepageCarousel() {
  return (
    <Carousel>
      {carouselItem.map((item, index) => (
        <CarouselCard key={index} data={item} />
      ))}
    </Carousel>
  );
}
