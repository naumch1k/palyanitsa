import PropTypes from 'prop-types';

import styles from './homepage-layout-team.module.scss';

export const HomepageLayoutTeam = ({ children }) => {
  return (
    <section className={styles.root}>
      {children}
    </section>
  );
};

HomepageLayoutTeam.propTypes = {
  children: PropTypes.object
};
