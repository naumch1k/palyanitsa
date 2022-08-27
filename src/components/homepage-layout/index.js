import PropTypes from 'prop-types';

import { HomepageLayoutHeadline } from './headline';

export const HomepageLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

HomepageLayout.Headline = HomepageLayoutHeadline;

HomepageLayout.propTypes = {
  children: PropTypes.object
};
