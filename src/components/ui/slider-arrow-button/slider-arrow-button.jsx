import PropTypes from 'prop-types';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import styles from './slider-arrow-button.module.scss';

export const SliderArrowButton = ({
  offset = 0,
  direction,
  onClick,
}) => {
  const style = { [direction]: `-${offset}px` };

  return (
    <button
      className={styles.root}
      type="button"
      style={style}
      onClick={onClick}
      aria-label={direction === 'right' ? 'Next Slide' : 'Previous Slide'}
    >
      {direction === 'right'
        ? <SlArrowRight className={styles.icon}/>
        : <SlArrowLeft className={styles.icon}/>
      }
    </button>
  );
};

SliderArrowButton.propTypes = {
  offset: PropTypes.number,
  direction: PropTypes.string,
  onClick: PropTypes.func,
};
