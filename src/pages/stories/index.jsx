import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import { PageTitle } from '../../components/page-title';
import BlogLayout from '../../components/blog-layout';
import { StoriesIntro } from '../../components/stories-intro';
import Carousel from '../../components/carousel';
import { BlogEntryCard } from '../../components/blog-entry-card';

import data from './mock-data.json';

const Stories = () => {
  return (
    <AppLayout donateButton>
      <SEO title="Stories"/>
      <BlogLayout>
        <BlogLayout.Title>
          <PageTitle text="Stories"/>
        </BlogLayout.Title>
        <StoriesIntro/>
        <Carousel numberOfCenteredSlides={3}>
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

export default Stories;
