import PropTypes from 'prop-types';
import { SliderArrowButton } from '../ui/slider-arrow-button';
import useCarousel from '../../hooks/use-carousel';
import styles from './carousel.module.scss';

export const Carousel = ({ numberOfCenteredSlides = 2, children }) => {
  const {
    sliderRef,
    instanceRef,
    currentSlide,
    loaded,
  } = useCarousel({
    numberOfCenteredSlides: numberOfCenteredSlides,
    slideSpacing: 20,
  });

  const handleLeftArrowClick = evt => evt.stopPropagation() || instanceRef.current?.prev();
  const handleRightArrowClick = evt => evt.stopPropagation() || instanceRef.current?.next();

  return (
    <>
      <ul
        ref={sliderRef}
        className={`${styles.root} keen-slider`}
      >
        {children}
      </ul>
      {loaded && instanceRef.current && (
        <div className={styles.sliderControls}>
          <SliderArrowButton
            direction="left"
            onClick={handleLeftArrowClick}
            disabled={currentSlide === 0}
          />
          <SliderArrowButton
            direction="right"
            onClick={handleRightArrowClick}
            disabled={currentSlide === children.length - 1}
          />
        </div>
      )}
    </>
  );
};

Carousel.propTypes = {
  numberOfCenteredSlides: PropTypes.number,
  children: PropTypes.node,
};
