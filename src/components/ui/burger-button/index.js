import PropTypes from 'prop-types';
import styles from './burger-button.module.scss';

export const BurgerButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={`${styles.root} ${isOpen ? `${styles.isOpen}` : ''}`}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      onClick={onClick}
    >
      <span className={styles.line}/>
      <span className={styles.line}/>
      <span className={styles.line}/>
      <span className={styles.label}>
        {isOpen ? 'Close' : 'Menu'}
      </span>
    </button>
  );
};

BurgerButton.propTypes = {
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};
