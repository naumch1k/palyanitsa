import { AppLayout } from '../app-layout';
import { HomepageLayout } from '../homepage-layout';
import { HomepageHeadline } from '../homepage-headline';
import { HomepageAbout } from '../homepage-about';
import { HomepageDisciplines } from '../homepage-disciplines';
import { HomepageTeam } from '../homepage-team';
import { HomepageCallToAction } from '../homepage-call-to-action';

import { aboutData } from './assets/homepage-about/mock-data.js';
import { disciplinesData } from './assets/homepage-disciplines/mock-data';
import { teamData } from './assets/homepage-team/mock-data.js';

const App = () => (
  <AppLayout>
    <HomepageLayout>
      <HomepageLayout.Headline>
        <HomepageHeadline/>
      </HomepageLayout.Headline>
      <HomepageLayout.About>
        <HomepageAbout
          tag={aboutData.tag}
          title={aboutData.title}
          subtitle={aboutData.subtitle}
          headline_image={aboutData.headline_image}
          principles={aboutData.principles}
        />
      </HomepageLayout.About>
      <HomepageLayout.Disciplines>
        <HomepageDisciplines
          tag={disciplinesData.tag}
          title={disciplinesData.title}
          subtitle={disciplinesData.subtitle}
          headline_image={disciplinesData.headline_image}
          disciplines={disciplinesData.disciplines}
        />
      </HomepageLayout.Disciplines>
      <HomepageLayout.Team>
        <HomepageTeam
          tag={teamData.tag}
          title={teamData.title}
          subtitle={teamData.subtitle}
          headline_image={teamData.headline_image}
          team={teamData.team}
        />
      </HomepageLayout.Team>
      <HomepageLayout.CallToAction>
        <HomepageCallToAction/>
      </HomepageLayout.CallToAction>
    </HomepageLayout>
  </AppLayout>

);

export default App;
