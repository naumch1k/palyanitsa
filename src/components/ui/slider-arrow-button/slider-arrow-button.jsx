import PropTypes from 'prop-types';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styles from './slider-arrow-button.module.scss';

export const SliderArrowButton = ({
  darkTheme,
  direction,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.root} ${darkTheme ? `${styles.darkTheme}` : ''}`}
      type="button"
      onClick={onClick}
      aria-label={direction === 'right' ? 'Next Slide' : 'Previous Slide'}
      disabled={disabled}
    >
      {direction === 'right'
        ? <SlArrowRight className={styles.icon}/>
        : <SlArrowLeft className={styles.icon}/>
      }
    </button>
  );
};

SliderArrowButton.propTypes = {
  darkTheme: PropTypes.bool,
  direction: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};
