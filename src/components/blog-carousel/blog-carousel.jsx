import PropTypes from 'prop-types';
import { SliderArrowButton } from '../ui/slider-arrow-button';
import { SliderDots } from '../ui/slider-dots/slider-dots';
import useBlogCarousel from '../../hooks/use-blog-carousel';
import styles from './blog-carousel.module.scss';

export const BlogCarousel = ({ children }) => {
  const {
    sliderRef,
    instanceRef,
    currentSlide,
    loaded,
  } = useBlogCarousel({
    numberOfCenteredSlides: 2,
    slideSpacing: 20,
  });

  const handleLeftArrowClick = evt => evt.stopPropagation() || instanceRef.current?.prev();
  const handleRightArrowClick = evt => evt.stopPropagation() || instanceRef.current?.next();
  const handleSliderDotClick = i => instanceRef.current?.moveToIdx(i);

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
          {window.innerWidth >= 768 ? (
            <>
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
            </>
          ) : (
            <SliderDots
              count={children.length}
              currentSlide={currentSlide}
              onSliderDotClick={handleSliderDotClick}
            />
          )}
        </div>
      )}
    </>
  );
};

BlogCarousel.propTypes = {
  children: PropTypes.node,
};
