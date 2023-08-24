import { AppLayout } from '../../components/app-layout';
import NewsLayout from '../../components/news-layout';
import NewsList from '../../components/news-list';
import { PageTitle } from '../../components/page-title';
import { NewsCard } from '../../components/news-card/news-card';

import { mockData } from './assets/mock-data';

const News = () => {
  return (
    <AppLayout>
      <NewsLayout>
        <NewsLayout.Title>
          <PageTitle text="The latest"/>
        </NewsLayout.Title>
        <NewsList>
          {mockData.news.map((item, i) => (
            <NewsList.Item key={i}>
              <NewsCard
                date={item.date}
                heading={item.heading}
                text={item.text}
                image={item.image}
              />
            </NewsList.Item>
          ))}
        </NewsList>
      </NewsLayout>
    </AppLayout>
  );
};

export default News;
