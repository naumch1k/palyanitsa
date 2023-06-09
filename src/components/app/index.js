import { AppLayout } from '../app-layout';
import { HomepageLayout } from '../homepage-layout';
import { HomepageHeadline } from '../homepage-headline';
import { HomepageAbout } from '../homepage-about';
import { HomepageTeam } from '../homepage-team';
import { HomepageCallToAction } from '../homepage-call-to-action';

import { aboutData } from './assets/homepage-about/mock-data.js';
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
        />
      </HomepageLayout.About>
      <HomepageLayout.Team>
        <HomepageTeam
          tag={teamData.tag}
          title={teamData.title}
          subtitle={teamData.subtitle}
          headline_image={teamData.headline_image}
        />
      </HomepageLayout.Team>
      <HomepageLayout.CallToAction>
        <HomepageCallToAction/>
      </HomepageLayout.CallToAction>
    </HomepageLayout>
  </AppLayout>

);

export default App;
