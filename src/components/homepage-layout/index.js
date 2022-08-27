import PropTypes from 'prop-types';

import { HomepageLayoutHeadline } from './headline';
import { HomepageLayoutAbout } from './about';

export const HomepageLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

HomepageLayout.Headline = HomepageLayoutHeadline;
HomepageLayout.About = HomepageLayoutAbout;

HomepageLayout.propTypes = {
  children: PropTypes.array
};
