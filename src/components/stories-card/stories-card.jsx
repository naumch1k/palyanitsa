import PropTypes from 'prop-types';
import { PageSubtitle } from '../page-subtitle';
import { Quote } from '../quote';
import { ArrowLink } from '../ui/arrow-link';
import styles from './stories-card.module.scss';

export const StoriesCard = ({ data }) => {
  const {
    first_name,
    heading,
    intro,
    quote,
    paragraphs,
    image_large,
    image_large_webp,
    image_mobile,
    image_mobile_webp,
    paypal_link,
    gofundme_link,
  } = data;

  return (
    <div className={styles.root}>
      <PageSubtitle className={styles.heading} text={heading}/>
      <picture>
        <source type="image/webp" media="(min-width: 428px)" srcSet={image_large_webp}/>
        <source type="image/webp" srcSet={image_mobile_webp}/>

        <source media="(min-width: 428px)" srcSet={image_large}/>
        <img className={styles.image} src={image_mobile} alt={`${first_name}'s picture`}/>
      </picture>
      <div className={styles.content}>
        <div className={styles.intro}>
          {intro.map((paragraph, i) => (
            <p className={styles.paragraph} key={i}>{paragraph}</p>
          ))}
        </div>
        <Quote
          className={styles.quote}
          text={quote}
        />
        <div className={styles.paragraphs}>
          {paragraphs.map((paragraph, i) => (
            <p className={styles.paragraph} key={i}>{paragraph}</p>
          ))}
        </div>
      </div>
      {(paypal_link || gofundme_link)
        && <div className={styles.links}>
          {paypal_link && <ArrowLink href={paypal_link} linkText={`Join ${first_name}'s PayPal Campaign`}/>}
          {gofundme_link && <ArrowLink href={gofundme_link} linkText={`Help ${first_name} on GoFundMe`}/>}
        </div>
      }
    </div>
  );
};

StoriesCard.propTypes = {
  data: PropTypes.shape({
    first_name: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    intro: PropTypes.arrayOf(PropTypes.string).isRequired,
    quote: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    image_large: PropTypes.string.isRequired,
    image_large_webp: PropTypes.string,
    image_mobile: PropTypes.string,
    image_mobile_webp: PropTypes.string,
    paypal_link: PropTypes.string,
    gofundme_link: PropTypes.string,
  }).isRequired,
};
