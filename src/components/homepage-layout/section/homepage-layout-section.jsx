import PropTypes from 'prop-types';
import styles from './homepage-layout-section.module.scss';

export const HomepageLayoutSection = ({ children }) => {
  return (
    <section className={styles.root}>
      {children}
    </section>
  );
};

HomepageLayoutSection.propTypes = {
  children: PropTypes.object.isRequired,
};
