import { useParams, Navigate } from 'react-router-dom';
import { AppLayout } from '../../components/app-layout';
import SEO from '../../components/seo';
import { PageTitle } from '../../components/page-title';
import { PageSubtitle } from '../../components/page-subtitle';
import { Quote } from '../../components/quote';
import { ArrowButton } from '../../components/ui/arrow-button';
import { ShareLinks } from '../../components/share-links';
import StoryLayout from '../../components/story-layout';
import styles from './story.module.scss';

import stories from '../stories/mock-data.json';

const Story = () => {
  const { id } = useParams();

  const story = stories.find(story => story.id === id);

  if (!story) return <Navigate to="/page-not-found"/>;

  return (
    <AppLayout donateButton>
      <SEO
        title={`Stories: ${story.heading}`}
        image={story.image_tablet}
      />
      <StoryLayout>
        <StoryLayout.Title>
          <PageTitle text="Stories"/>
        </StoryLayout.Title>
        <StoryLayout.Content>
          <PageSubtitle className={styles.heading} text={story.heading}/>
          <picture>
            <source type="image/webp" media="(min-width: 428px)" srcSet={story.image_tablet_webp}/>
            <source type="image/webp" srcSet={story.image_mobile_webp}/>

            <source media="(min-width: 428px)" srcSet={story.image_tablet}/>
            <img className={styles.image} src={story.image_mobile} alt={`${story.first_name}'s picture`}/>
          </picture>
          <div className={styles.body}>
            <div className={styles.intro}>
              {story.intro.map((paragraph, i) => (
                <p className={styles.paragraph} key={i}>{paragraph}</p>
              ))}
            </div>
            <Quote
              className={styles.quote}
              text={story.quote}
            />
            <div className={styles.paragraphs}>
              {story.paragraphs.map((paragraph, i) => (
                <p className={styles.paragraph} key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
          {(story.paypal_link || story.gofundme_link)
            && <div className={styles.donationLinks}>
              {story.paypal_link && (
                <ArrowButton
                  isLink
                  href={story.paypal_link}
                  text={`Join ${story.first_name}'s PayPal Campaign`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
              {story.gofundme_link && (
                <ArrowButton
                  isLink
                  href={story.gofundme_link}
                  text={`Help ${story.first_name} on GoFundMe`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              )}
            </div>
          }
          <ShareLinks className={styles.shareLinks}/>
        </StoryLayout.Content>
      </StoryLayout>
    </AppLayout>
  );
};

export default Story;
