import { useParams, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { AppLayout } from '../../components/app-layout';
import BlogEntryLayout from '../../components/blog-entry-layout';
import SEO from '../../components/seo';
import { ShareLinks } from '../../components/share-links';
import styles from './blog-entry.module.scss';

import blogEntries from '../blog/mock-data.json';

const BlogEntry = () => {
  const { id } = useParams();

  const blogEntry = blogEntries.find(entry => entry.id === id);

  if (!blogEntry) return <Navigate to="/page-not-found"/>;

  return (
    <AppLayout donateButton>
      <SEO title={`The Latest: ${blogEntry.heading}`}/>
      <BlogEntryLayout>
        <BlogEntryLayout.Headline>
          <picture>
            <source type="image/webp" media="(min-width: 768px)" srcSet={blogEntry.image_desktop_webp}/>
            <source type="image/webp" media="(min-width: 428px)" srcSet={blogEntry.image_tablet_webp}/>
            <source type="image/webp" srcSet={blogEntry.image_mobile_webp}/>

            <source media="(min-width: 768px)" srcSet={blogEntry.image_desktop}/>
            <source media="(min-width: 428px)" srcSet={blogEntry.image_tablet}/>
            <img className={styles.image} src={blogEntry.image_mobile} alt=""/>
          </picture>
        </BlogEntryLayout.Headline>
        <BlogEntryLayout.Content>
          <h1 className={styles.heading}>{blogEntry.heading}</h1>
          <div className={styles.body}>
            <ReactMarkdown>{blogEntry.content}</ReactMarkdown>
          </div>
          <p className={styles.date}>{blogEntry.date}</p>
          <ShareLinks/>
        </BlogEntryLayout.Content>
      </BlogEntryLayout>
    </AppLayout>
  );
};

export default BlogEntry;
