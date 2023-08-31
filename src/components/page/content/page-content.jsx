import PropTypes from 'prop-types';

import styles from './page-content.module.scss';

export const PageContent = ({ children }) => {
  return (
    <main className={styles.root}>
      {children}
    </main>
  );
};

PageContent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};
