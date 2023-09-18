import { useState } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import styles from './slider.module.scss';
import { SliderArrowButton } from '../ui/slider-arrow-button';
import { SliderDots } from '../ui/slider-dots';

export const Slider = ({
  darkTheme = false,
  children,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      spacing: 40,
    },
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const handleLeftArrowClick = evt => evt.stopPropagation() || instanceRef.current?.prev();
  const handleRightArrowClick = evt => evt.stopPropagation() || instanceRef.current?.next();
  const handleSliderDotClick = i => instanceRef.current?.moveToIdx(i);

  return (
    <div className={styles.wrapper}>
      <div
        ref={sliderRef}
        className={`${styles.root} keen-slider`}
      >
        {children}
      </div>
      {loaded && instanceRef.current && (
        <>
          <div className={`${styles.arrow} ${styles.arrowLeft}`}>
            <SliderArrowButton
              darkTheme={darkTheme}
              direction="left"
              onClick={handleLeftArrowClick}
            />
          </div>
          <div className={`${styles.arrow} ${styles.arrowRight}`}>
            <SliderArrowButton
              darkTheme={darkTheme}
              direction="right"
              onClick={handleRightArrowClick}
            />
          </div>
        </>
      )}
      {loaded && instanceRef.current && (
        <SliderDots
          darkTheme={darkTheme}
          count={children.length}
          currentSlide={currentSlide}
          onSliderDotClick={handleSliderDotClick}
        />
      )}
    </div>
  );
};

Slider.propTypes = {
  darkTheme: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
