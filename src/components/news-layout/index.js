import { NewsLayout as Component } from './news-layout';
import { NewsLayoutTitle } from './title';

const NewsLayout = Object.assign(Component, {
  Title: NewsLayoutTitle,
});

export default NewsLayout;
