import { AppLayout } from '../../components/app-layout';
import NewsLayout from '../../components/news-layout';
import NewsList from '../../components/news-list';
import { NewsCard } from '../../components/news-card/news-card';

import { mockData } from './assets/mock-data';

const News = () => {
  return (
    <AppLayout>
      <NewsLayout>
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
