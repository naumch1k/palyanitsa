import Head from 'next/head';

import { AppLayout } from '../components/app-layout/';

const HomePage = () => {
  return (
    <AppLayout>
      <Head>
        <title>
          Polyanitsa Game Studio
        </title>
      </Head>
    </AppLayout>
  );
};

export default HomePage;
