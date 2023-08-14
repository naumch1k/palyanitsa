import PropTypes from 'prop-types';
import { PageHeader } from './header';
import { PageContent } from './content';
import { PageFooter } from './footer';
import { PageBurgerButton } from './burger-button';
import { PageDonateButton } from './donate-button';

import styles from './page.module.scss';

export const Page = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

Page.Header = PageHeader;
Page.Content = PageContent;
Page.Footer = PageFooter;
Page.BurgerButton = PageBurgerButton;
Page.DonateButton = PageDonateButton;

Page.propTypes = {
  children: PropTypes.array
};
