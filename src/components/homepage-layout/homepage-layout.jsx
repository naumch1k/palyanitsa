import PropTypes from 'prop-types';

export const HomepageLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

HomepageLayout.propTypes = {
  children: PropTypes.array
};
