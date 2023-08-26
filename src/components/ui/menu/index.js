import { MenuItem } from './item';
import { Menu as Component } from './menu';

export const Menu = Object.assign(Component, {
  Item: MenuItem,
});
