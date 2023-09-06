import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import NewsLayout from '../../components/news-layout';
import NewsList from '../../components/news-list';
import { PageTitle } from '../../components/page-title';
import { StoriesCard } from '../../components/stories-card';

import { mockData } from './assets/mock-data';

const Stories = () => {
  return (
    <AppLayout>
      <SEO title="Stories"/>
      {/* TODO: rename NewsLayout, NewsList as it shared between several pages*/}
      <NewsLayout>
        <NewsLayout.Title>
          <PageTitle text="Stories"/>
        </NewsLayout.Title>
        <NewsList>
          {mockData.stories.map((item, i) => (
            <NewsList.Item key={i}>
              <StoriesCard data={item}/>
            </NewsList.Item>
          ))}
        </NewsList>
      </NewsLayout>
    </AppLayout>
  );
};

export default Stories;