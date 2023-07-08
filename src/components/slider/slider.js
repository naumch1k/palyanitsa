import { useState } from 'react';
import PropTypes from 'prop-types';
import { useKeenSlider } from 'keen-slider/react';
import styles from './slider.module.scss';
import { ArrowButton } from '../ui/arrow-button';

export const Slider = ({
  arrowButtonsOffset,
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
          <ArrowButton
            offset={arrowButtonsOffset}
            direction="left"
            onClick={e => e.stopPropagation() || instanceRef.current?.prev()}
          />
          <ArrowButton
            offset={arrowButtonsOffset}
            direction="right"
            onClick={e => e.stopPropagation() || instanceRef.current?.next()}
          />
        </>
      )}
    </div>
  );
};

Slider.propTypes = {
  arrowButtonsOffset: PropTypes.number,
  children: PropTypes.node,
};
