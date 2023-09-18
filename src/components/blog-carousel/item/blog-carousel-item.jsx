import PropTypes from 'prop-types';

export const BlogCarouselItem = ({ children }) => {
  return (
    <li className="keen-slider__slide">
      {children}
    </li>
  );
};

BlogCarouselItem.propTypes = {
  children: PropTypes.node.isRequired,
};
