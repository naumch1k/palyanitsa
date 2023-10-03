import { useState } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import { SliderArrowButton } from '../ui/slider-arrow-button';
import { ProgressBar } from '../ui/progress-bar/progress-bar';
import useProgressBar from '../../hooks/use-progress-bar';
import styles from './slider.module.scss';

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

  const completedPercentage = useProgressBar(children.length, currentSlide);

  const handleLeftArrowClick = evt => evt.stopPropagation() || instanceRef.current?.prev();
  const handleRightArrowClick = evt => evt.stopPropagation() || instanceRef.current?.next();

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
        <ProgressBar
          darkTheme={darkTheme}
          className={styles.progressBar}
          completed={completedPercentage}
        />
      )}
    </div>
  );
};

Slider.propTypes = {
  darkTheme: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
