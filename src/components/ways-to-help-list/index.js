import { WaysToHelpList as Component } from './ways-to-help-list';
import { WaysToHelpListItem } from './item';

const WaysToHelpList = Object.assign(Component, {
  Item: WaysToHelpListItem,
});

export default WaysToHelpList;
