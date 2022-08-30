import PropTypes from 'prop-types';

import { HomepageLayoutHeadline } from './headline';
import { HomepageLayoutAbout } from './about';
import { HomepageLayoutTeam } from './team';
import { HomepageLayoutCallToAction } from './call-to-action';

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
HomepageLayout.CallToAction = HomepageLayoutCallToAction;

HomepageLayout.propTypes = {
  children: PropTypes.array
};
