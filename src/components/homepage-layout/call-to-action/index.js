import PropTypes from 'prop-types';

import styles from './homepage-layout-call-to-action.module.scss';

export const HomepageLayoutCallToAction = ({ children }) => {
  return (
    <section className={styles.root}>
      {children}
    </section>
  );
};

HomepageLayoutCallToAction.propTypes = {
  children: PropTypes.object
};
