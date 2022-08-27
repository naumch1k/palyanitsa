import PropTypes from 'prop-types';

import styles from './homepage-layout-about.module.scss';

export const HomepageLayoutAbout = ({ children }) => {
  return (
    <section className={styles.root}>
      {children}
    </section>
  );
};

HomepageLayoutAbout.propTypes = {
  children: PropTypes.object
};
