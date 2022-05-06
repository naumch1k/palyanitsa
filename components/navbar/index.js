import classNames from 'classnames/bind';

import { NavbarLogotype } from './logotype';
import { NavbarActions } from './actions';
import { NavbarSection } from './section';

import styles from './navbar.module.css';

const cn = classNames.bind(styles);

export const Navbar = ({ children }) => {
  return (
    <div className={cn('root')}>
      {children}
    </div>
  );
};

Navbar.Logotype = NavbarLogotype;
Navbar.Actions = NavbarActions;
Navbar.Section = NavbarSection;
