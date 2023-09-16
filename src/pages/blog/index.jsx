import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import NewsLayout from '../../components/news-layout';
import NewsList from '../../components/news-list';
import { PageTitle } from '../../components/page-title';
import { NewsCard } from '../../components/news-card/news-card';

import data from './mock-data.json';

const Blog = () => {
  return (
    <AppLayout donateButton>
      <SEO title="The Latest"/>
      <NewsLayout>
        <NewsLayout.Title>
          <PageTitle text="The latest"/>
        </NewsLayout.Title>
        <NewsList>
          {data.map((item, i) => (
            <NewsList.Item key={i}>
              <NewsCard data={item}/>
            </NewsList.Item>
          ))}
        </NewsList>
      </NewsLayout>
    </AppLayout>
  );
};

export default Blog;
