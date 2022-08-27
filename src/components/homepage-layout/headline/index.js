import PropTypes from 'prop-types';

import styles from './homepage-layout-headline.module.scss';

export const HomepageLayoutHeadline = ({ children }) => {
  return (
    <section className={styles.root}>
      {children}
    </section>
  );
};

HomepageLayoutHeadline.propTypes = {
  children: PropTypes.object
};
