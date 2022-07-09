import Head from 'next/head';

import { AppLayout } from '../components/app-layout/';
import { HomepageHeadline } from '../components/homepage-headline';

const HomePage = () => {
  return (
    <AppLayout>
      <Head>
        <title>
          Palyanitsa Game Studio
        </title>
      </Head>
      <HomepageHeadline/>
    </AppLayout>
  );
};

export default HomePage;
