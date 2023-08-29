import { NewsList as Component } from './news-list';
import { NewsListItem } from './item';

const NewsList = Object.assign(Component, {
  Item: NewsListItem,
});

export default NewsList;
