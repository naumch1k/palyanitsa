import PropTypes from 'prop-types';
import styles from './homepage-layout-donations.module.scss';

export const HomepageLayoutDonations = ({ children }) => {
  return (
    <section className={styles.root}>
      {children}
    </section>
  );
};

HomepageLayoutDonations.propTypes = {
  children: PropTypes.object
};
