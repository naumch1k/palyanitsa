import { BlogCarousel as Component } from './blog-carousel';
import { BlogCarouselItem } from './item';

const BlogCarousel = Object.assign(Component, {
  Item: BlogCarouselItem,
});

export default BlogCarousel;

