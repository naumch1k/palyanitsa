import PropTypes from 'prop-types';
import styles from './homepage-layout-disciplines.module.scss';

export const HomepageLayoutDisciplines = ({ children }) => {
  return (
    <section className={styles.root}>
      {children}
    </section>
  );
};

HomepageLayoutDisciplines.propTypes = {
  children: PropTypes.object
};
