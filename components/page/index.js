import classNames from 'classnames/bind';

import { PageNavbar } from './navbar';
import { PageContent } from './content';
import { PageFooter } from './footer';
import styles from './page.module.css';

const cn = classNames.bind(styles);

export const Page = ({ children }) => {
  return (
    <div className={cn('root')}>
      {children}
      <div className={cn('bottom-placeholder')}/>
    </div>
  );
};

Page.Navbar = PageNavbar;
Page.Content = PageContent;
Page.Footer = PageFooter;
