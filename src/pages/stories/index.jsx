import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import StoriesLayout from '../../components/stories-layout';
import NewsList from '../../components/news-list';
import { PageTitle } from '../../components/page-title';
import { StoriesCard } from '../../components/stories-card';

import data from './mock-data.json';

const Stories = () => {
  return (
    <AppLayout donateButton>
      <SEO title="Stories"/>
      <StoriesLayout>
        <StoriesLayout.Title>
          <PageTitle text="Stories"/>
        </StoriesLayout.Title>
        <NewsList>
          {data.map((item, i) => (
            <NewsList.Item key={i}>
              <StoriesCard data={item}/>
            </NewsList.Item>
          ))}
        </NewsList>
      </StoriesLayout>
    </AppLayout>
  );
};

export default Stories;
