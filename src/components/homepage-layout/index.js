import PropTypes from 'prop-types';

import { HomepageLayoutHeadline } from './headline';
import { HomepageLayoutAbout } from './about';
import { HomepageLayoutDisciplines } from './disciplines';
import { HomepageLayoutTeam } from './team';
import { HomepageLayoutDonations } from './donations';
import { HomepageLayoutCallToAction } from './call-to-action';
import { HomepageLayoutPartners } from './partners';

export const HomepageLayout = ({ children }) => {
  return (
    <>
      {children}
    </>
  );
};

HomepageLayout.Headline = HomepageLayoutHeadline;
HomepageLayout.About = HomepageLayoutAbout;
HomepageLayout.Disciplines = HomepageLayoutDisciplines;
HomepageLayout.Team = HomepageLayoutTeam;
HomepageLayout.Donations = HomepageLayoutDonations;
HomepageLayout.CallToAction = HomepageLayoutCallToAction;
HomepageLayout.Partners = HomepageLayoutPartners;

HomepageLayout.propTypes = {
  children: PropTypes.array
};
