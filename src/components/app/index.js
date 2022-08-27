import { AppLayout } from '../app-layout';
import { HomepageLayout } from '../homepage-layout';
import { HomepageHeadline } from '../homepage-headline';

const App = () => (
  <AppLayout>
    <HomepageLayout>
      <HomepageLayout.Headline>
        <HomepageHeadline/>
      </HomepageLayout.Headline>
    </HomepageLayout>
  </AppLayout>

);

export default App;
