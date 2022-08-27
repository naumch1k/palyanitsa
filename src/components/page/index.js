import PropTypes from 'prop-types';

import { PageContent } from './content';
import { PageFooter } from './footer';

import styles from './page.module.scss';

export const Page = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
      <div className={styles.bottomPlaceholder}/>
    </div>
  );
};

Page.Content = PageContent;
Page.Footer = PageFooter;

Page.propTypes = {
  children: PropTypes.array
};
