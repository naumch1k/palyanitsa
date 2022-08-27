import PropTypes from 'prop-types';

import { HomepageLayoutHeadline } from './headline';
import { HomepageLayoutAbout } from './about';
import { HomepageLayoutTeam } from './team';

export const HomepageLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

HomepageLayout.Headline = HomepageLayoutHeadline;
HomepageLayout.About = HomepageLayoutAbout;
HomepageLayout.Team = HomepageLayoutTeam;

HomepageLayout.propTypes = {
  children: PropTypes.array
};
