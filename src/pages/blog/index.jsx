import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import { PageTitle } from '../../components/page-title';
import BlogLayout from '../../components/blog-layout';
import { BlogMessage } from '../../components/blog-message';
import Carousel from '../../components/carousel';
import { BlogEntryCard } from '../../components/blog-entry-card';

import data from './mock-data.json';

const Blog = () => {
  return (
    <AppLayout donateButton>
      <SEO title="The Latest"/>
      <BlogLayout>
        <BlogLayout.Title>
          <PageTitle text="The latest"/>
        </BlogLayout.Title>
        <BlogMessage/>
        <Carousel>
          {data.map((item, i) => (
            <Carousel.Item key={i}>
              <BlogEntryCard data={item}/>
            </Carousel.Item>
          ))}
        </Carousel>
      </BlogLayout>
    </AppLayout>
  );
};

export default Blog;
