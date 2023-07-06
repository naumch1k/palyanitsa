import PropTypes from 'prop-types';

export const HomepageLayoutPartners = ({ children }) => {
  return (
    <section>
      {children}
    </section>
  );
};

HomepageLayoutPartners.propTypes = {
  children: PropTypes.object
};
