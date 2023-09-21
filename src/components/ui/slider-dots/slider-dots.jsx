import PropTypes from 'prop-types';
import styles from './slider-dots.module.scss';

export const SliderDots = ({
  darkTheme,
  count,
  currentSlide,
  onSliderDotClick,
}) => {

  return (
    <div className={styles.root}>
      {[...Array.from(Array(count).keys())].map(i => {
        return (
          <button
            key={i}
            onClick={() => onSliderDotClick(i)}
            className={`
              ${styles.dot}
              ${currentSlide === i ? `${styles.active}` : ''}
              ${darkTheme ? `${styles.darkTheme}` : ''}
            `}
            aria-label={`Slide ${i + 1}`}
          />
        );
      })}
    </div>
  );
};

SliderDots.propTypes = {
  darkTheme: PropTypes.bool,
  count: PropTypes.number.isRequired,
  currentSlide: PropTypes.number.isRequired,
  onSliderDotClick: PropTypes.func.isRequired,
};
