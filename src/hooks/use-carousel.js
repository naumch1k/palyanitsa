import { useState, useEffect } from 'react';
import { useKeenSlider } from 'keen-slider/react';

const Breakpoints = {
  TABLET_LANDSCAPE: 1000,
  DESKTOP: 1280,
  LARGE_DESKTOP: 2560,
};

const MaxContentWidth = {
  DESKTOP: 1170,
  LARGE_DESKTOP: 1280,
};

const defaultCarouselSettings = {
  slidesOrigin: 0,
  slidesPerView: 1,
  initialSlide: 0,
};

// Calculates the indent for slider content based on screen width and maximum content width
const calculateSlidesOrigin = (screenInnerWidth, maxContentWidth) =>
  ((screenInnerWidth - maxContentWidth) / 2) / screenInnerWidth;

// Calculates the number of slides that can fit within the screen based on screen width
// and max content width, considering slide spacing and number centered slides
const calculateSlidesPerView = (screenInnerWidth, maxContentWidth, centeredSlides, slideSpacing) => {
  // Calculate the width of a single slide based on number of centered slides and spacing
  const singleSlideWidth = (maxContentWidth - ((centeredSlides - 1) * slideSpacing)) / centeredSlides;
  // Calculate how many more slides can fit within the screen apart from centered ones
  const moreSlidesCanFit = (screenInnerWidth - maxContentWidth) / (singleSlideWidth + slideSpacing);
  // Return the total number of slides per screen
  return centeredSlides + moreSlidesCanFit;
};

function useCarousel({ numberOfCenteredSlides, slideSpacing = 20 }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [slidesOrigin, setSlidesOrigin] = useState(defaultCarouselSettings.slidesOrigin);
  const [slidesPerView, setSlidesPerView] = useState(defaultCarouselSettings.slidesPerView);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: slidesOrigin,
      perView: slidesPerView,
      spacing: slideSpacing,
    },
    initial: defaultCarouselSettings.initialSlide,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const updateScreenWidth = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', updateScreenWidth);

    return () => window.removeEventListener('resize', updateScreenWidth);
  }, []);

  useEffect(() => {
    switch (true) {
    case screenWidth >= Breakpoints.LARGE_DESKTOP:
      setSlidesOrigin(calculateSlidesOrigin(screenWidth, MaxContentWidth.LARGE_DESKTOP));
      setSlidesPerView(calculateSlidesPerView(
        screenWidth,
        MaxContentWidth.LARGE_DESKTOP,
        numberOfCenteredSlides,
        slideSpacing
      ));
      break;
    case screenWidth >= Breakpoints.DESKTOP:
      setSlidesOrigin(calculateSlidesOrigin(screenWidth, MaxContentWidth.DESKTOP));
      setSlidesPerView(calculateSlidesPerView(
        screenWidth,
        MaxContentWidth.DESKTOP,
        numberOfCenteredSlides,
        slideSpacing,
      ));
      break;
    case screenWidth >= Breakpoints.TABLET_LANDSCAPE:
      setSlidesOrigin(calculateSlidesOrigin(screenWidth, screenWidth - 96));
      setSlidesPerView(calculateSlidesPerView(
        screenWidth,
        screenWidth - 96,
        numberOfCenteredSlides,
        slideSpacing,
      ));
      break;
    default:
      setSlidesOrigin(defaultCarouselSettings.slidesOrigin);
      setSlidesPerView(defaultCarouselSettings.slidesPerView);
      break;
    }
  }, [screenWidth]);

  return {
    sliderRef,
    instanceRef,
    currentSlide,
    loaded,
  };
}

export default useCarousel;
