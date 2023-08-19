import PropTypes from 'prop-types';
import styles from './page-burger-button.module.scss';

export const PageBurgerButton = ({ children }) => {
  return (
    <div className={styles.root}>
      {children}
    </div>
  );
};

PageBurgerButton.propTypes = {
  children: PropTypes.object,
};
