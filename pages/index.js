import Head from 'next/head';

import { AppLayout } from '../components/app-layout/';
import { HomepageLayout } from '../components/homepage-layout/homepage-layout';
import { HomepageHeadline } from '../components/homepage-headline';
import { HomepageAbout } from '../components/homepage-about';

import aboutData from './assets/about-data.json';

const HomePage = () => {
  return (
    <AppLayout>
      <Head>
        <title>
          Palyanitsa Game Studio
        </title>
      </Head>
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
};

export default HomePage;
