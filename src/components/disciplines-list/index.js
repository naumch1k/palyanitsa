import { DisciplinesList as Component } from './disciplines-list';
import { DisciplinesListItem } from './item';

const DisciplinesList = Object.assign(Component, {
  Item: DisciplinesListItem,
});

export default DisciplinesList;
