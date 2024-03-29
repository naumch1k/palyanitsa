import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

ScrollToTop.propTypes = {
  children: PropTypes.node.isRequired,
};
