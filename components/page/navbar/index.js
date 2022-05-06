import classNames from 'classnames/bind';

import styles from './page-navbar.module.css';

const cn = classNames.bind(styles);

export const PageNavbar = ({ children }) => {
  return (
    <header className={cn('root')}>
      {children}
    </header>
  );
};
