import { Carousel as Component } from './carousel';
import { CarouselItem } from './item';

const Carousel = Object.assign(Component, {
  Item: CarouselItem,
});

export default Carousel;

