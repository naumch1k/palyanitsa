import Head from 'next/head';

import { AppLayout } from '../components/app-layout/';
import { HomepageLayout } from '../components/homepage-layout/homepage-layout';
import { HomepageHeadline } from '../components/homepage-headline';

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
      </HomepageLayout>
    </AppLayout>
  );
};

export default HomePage;
