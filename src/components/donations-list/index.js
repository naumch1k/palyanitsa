import { DonationsList as Component } from './donations-list';
import { DonationsListItem } from './item';

const DonationsList = Object.assign(Component, {
  Item: DonationsListItem,
});

export default DonationsList;
