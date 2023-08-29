import { PartnersList as Component } from './partners-list';
import { PartnersListItem } from './item';

const PartnersList = Object.assign(Component, {
  Item: PartnersListItem,
});

export default PartnersList;
