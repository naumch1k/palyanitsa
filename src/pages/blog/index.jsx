import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import { PageTitle } from '../../components/page-title';
import BlogLayout from '../../components/blog-layout';
import { BlogMessage } from '../../components/blog-message';
import BlogCarousel from '../../components/blog-carousel';
import { NewsCard } from '../../components/news-card/news-card';

import data from './mock-data.json';

const Blog = () => {
  return (
    // TODO: return donateButton after DonateButton restyled
    <AppLayout>
      <SEO title="The Latest"/>
      <BlogLayout>
        <BlogLayout.Title>
          <PageTitle text="The latest"/>
        </BlogLayout.Title>
        <BlogMessage/>
        <BlogCarousel>
          {data.map((item, i) => (
            <BlogCarousel.Item key={i}>
              <NewsCard key={i} data={item}/>
            </BlogCarousel.Item>
          ))}
        </BlogCarousel>
      </BlogLayout>
    </AppLayout>
  );
};

export default Blog;
