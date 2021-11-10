import { CarouselCard, Carousel } from '~/components';

const carouselItem = [
  {
    title: 'New Drop',
    description: 'NBA Top Shot Legendary Collection Available Now!',
    cardsAmount: 127,
    price: '₣500',
    logo: 'static/img/nba-top-shot.png'
  },
  {
    title: 'New Drop',
    description: 'NBA Top Shot Legendary Collection Available Now!',
    cardsAmount: 127,
    price: '₣500',
    logo: 'static/img/nba-top-shot.png'
  },
  {
    title: 'New Drop',
    description: 'NBA Top Shot Legendary Collection Available Now!',
    cardsAmount: 127,
    price: '₣500',
    logo: 'static/img/nba-top-shot.png'
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
