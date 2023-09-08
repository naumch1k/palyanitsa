import { AccordionList as Component } from './accordion-list';
import { AccordionListItem } from './item';

const AccordionList = Object.assign(Component, {
  Item: AccordionListItem,
});

export default AccordionList;
