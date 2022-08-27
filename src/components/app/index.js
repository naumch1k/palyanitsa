import { AppLayout } from '../app-layout';
import { HomepageLayout } from '../homepage-layout';
import { HomepageHeadline } from '../homepage-headline';
import { HomepageAbout } from '../homepage-about';

import aboutData from './assets/homepage-about/mock-data.json';

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
    </HomepageLayout>
  </AppLayout>

);

export default App;
