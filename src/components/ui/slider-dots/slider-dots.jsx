import PropTypes from 'prop-types';
import styles from './slider-dots.module.scss';

export const SliderDots = ({
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
            className={`${styles.dot} ${currentSlide === i ? `${styles.active}` : ''}`}
          />
        );
      })}
    </div>
  );
};

SliderDots.propTypes = {
  count: PropTypes.number,
  currentSlide: PropTypes.number,
  onSliderDotClick: PropTypes.func,
};
