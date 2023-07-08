import PropTypes from 'prop-types';

export const SliderItem = ({ children }) => {
  return (
    <div className="keen-slider__slide">
      {children}
    </div>
  );
};

SliderItem.propTypes = {
  children: PropTypes.node,
};
