import PropTypes from 'prop-types';

export const CarouselItem = ({ children }) => {
  return (
    <li className="keen-slider__slide">
      {children}
    </li>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
};
