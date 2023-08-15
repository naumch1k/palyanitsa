import HomepageLayout from '../../components/homepage-layout';
import { HomepageHeadline } from '../../components/homepage-headline';
import { HomepageAbout } from '../../components/homepage-about';
import { HomepageDisciplines } from '../../components/homepage-disciplines';
import { HomepageTeam } from '../../components/homepage-team';
import { HomepageDonations } from '../../components/homepage-donations';
import { HomepageCallToAction } from '../../components/homepage-call-to-action';
import { HomepagePartners } from '../../components/homepage-partners';

import { aboutData } from './assets/homepage-about/mock-data.js';
import { disciplinesData } from './assets/homepage-disciplines/mock-data';
import { teamData } from './assets/homepage-team/mock-data.js';
import { donationsData } from './assets/homepage-donations/mock-data.js';
import { callToActionData } from './assets/homepage-call-to-action/mock-data';
import { partnersData } from './assets/homepage-partners/mock-data';

const Home = () => {
  return (
    <HomepageLayout>
      <HomepageLayout.Headline>
        <HomepageHeadline/>
      </HomepageLayout.Headline>
      <HomepageLayout.Section
        tag={aboutData.tag}
        title={aboutData.title}
        subtitle={aboutData.subtitle}
        headline_image={aboutData.headline_image}
      >
        <HomepageAbout
          principles={aboutData.principles}
          quotes={aboutData.quotes}
        />
      </HomepageLayout.Section>
      <HomepageLayout.Section
        tag={disciplinesData.tag}
        title={disciplinesData.title}
        subtitle={disciplinesData.subtitle}
        headline_image={disciplinesData.headline_image}
      >
        <HomepageDisciplines disciplines={disciplinesData.disciplines}/>
      </HomepageLayout.Section>
      <HomepageLayout.Section>
        <HomepageTeam
          tag={teamData.tag}
          title={teamData.title}
          subtitle={teamData.subtitle}
          headline_image={teamData.headline_image}
          team={teamData.team}
        />
      </HomepageLayout.Section>
      <HomepageLayout.Section
        tag={donationsData.tag}
        title={donationsData.title}
        subtitle={donationsData.subtitle}
        headline_image={donationsData.headline_image}
      >
        <HomepageDonations donation_platforms={donationsData.donation_platforms}/>
      </HomepageLayout.Section>
      <HomepageLayout.Section
        tag={callToActionData.tag}
        title={callToActionData.title}
        subtitle={callToActionData.subtitle}
        headline_image={callToActionData.headline_image}
      >
        <HomepageCallToAction
          general_info={callToActionData.general_info}/>
      </HomepageLayout.Section>
      <HomepageLayout.Section>
        <HomepagePartners partners={partnersData}/>
      </HomepageLayout.Section>
    </HomepageLayout>
  );
};

export default Home;
