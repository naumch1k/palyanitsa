import { AppLayout } from '../app-layout';
import { HomepageLayout } from '../homepage-layout';
import { HomepageHeadline } from '../homepage-headline';
import { HomepageAbout } from '../homepage-about';
import { HomepageTeam } from '../homepage-team';
import { HomepageCallToAction } from '../homepage-call-to-action';

import aboutData from './assets/homepage-about/mock-data.json';
import { teamData } from './assets/homepage-team/mock-data';

const App = () => (
  <AppLayout>
    <HomepageLayout>
      <HomepageLayout.Headline>
        <HomepageHeadline/>
      </HomepageLayout.Headline>
      <HomepageLayout.About>
        <HomepageAbout
          title={aboutData.title}
          items={aboutData.items}
        />
      </HomepageLayout.About>
      <HomepageLayout.Team>
        <HomepageTeam
          title={teamData.title}
          description={teamData.description}
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
