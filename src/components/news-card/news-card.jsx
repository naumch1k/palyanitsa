import PropTypes from 'prop-types';
import { PageSubtitle } from '../page-subtitle';
import styles from './news-card.module.scss';

export const NewsCard = ({ data }) => {
  const {
    date,
    heading,
    paragraphs,
    image_large,
    image_large_webp,
    image_mobile,
    image_mobile_webp,
  } = data;

  return (
    <div className={styles.root}>
      <PageSubtitle className={styles.heading} text={heading}/>
      <p className={styles.date}>{date}</p>
      <picture className={styles.imageWrapper}>
        <source type="image/webp" media="(min-width: 428px)" srcSet={image_large_webp}/>
        <source type="image/webp" srcSet={image_mobile_webp}/>

        <source media="(min-width: 428px)" srcSet={image_large}/>
        <img className={styles.image} src={image_mobile} alt={''}/>
      </picture>
      <div className={styles.paragraphs}>
        {paragraphs.map((paragraph, i) => (
          <p className={styles.paragraph} key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  data: PropTypes.shape({
    date: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    paragraphs: PropTypes.arrayOf(PropTypes.string).isRequired,
    image_large: PropTypes.string.isRequired,
    image_large_webp: PropTypes.string,
    image_mobile: PropTypes.string,
    image_mobile_webp: PropTypes.string,
  }).isRequired,
};
