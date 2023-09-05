import PropTypes from 'prop-types';
import { Quote } from '../quote';
import { ArrowLink } from '../ui/arrow-link';
import styles from './stories-card.module.scss';

export const StoriesCard = ({ data }) => {
  const {
    firstName,
    heading,
    intro,
    quote,
    paragraphs,
    image,
    links = {},
  } = data;

  return (
    <div className={styles.root}>
      <h2 className={styles.heading}>{heading}</h2>
      <img className={styles.image} src={image} alt={`${firstName}'s picture`}/>
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
      {links
        && <div className={styles.links}>
          {links.paypal && <ArrowLink href={links.paypal} linkText={`Join ${firstName}'s PayPal Campaign`}/>}
          {links.goFundMe && <ArrowLink href={links.goFundMe} linkText={`Help ${firstName} on GoFundMe`}/>}
        </div>
      }
    </div>
  );
};

StoriesCard.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    intro: PropTypes.arrayOf(PropTypes.string).isRequired,
    quote: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    links: PropTypes.shape({
      paypal: PropTypes.string,
      goFundMe: PropTypes.string,
    }),
  }).isRequired,
};
