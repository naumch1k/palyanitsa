import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './blog-entry-card.module.scss';

export const BlogEntryCard = ({ data }) => {
  const {
    id,
    date,
    heading,
    image_large,
    image_large_webp,
    image_mobile,
    image_mobile_webp,
  } = data;

  return (
    <Link className={styles.link} to={`${id}`} aria-label={`Read: ${heading}`}>
      <picture className={styles.imageWrapper}>
        <source type="image/webp" media="(min-width: 428px)" srcSet={image_large_webp}/>
        <source type="image/webp" srcSet={image_mobile_webp}/>

        <source media="(min-width: 428px)" srcSet={image_large}/>
        <img className={styles.image} src={image_mobile} alt={''}/>
      </picture>
      <p className={styles.date}>{date}</p>
      <h2 className={styles.heading}>{heading}</h2>
    </Link>
  );
};

BlogEntryCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    image_large: PropTypes.string.isRequired,
    image_large_webp: PropTypes.string,
    image_mobile: PropTypes.string,
    image_mobile_webp: PropTypes.string,
  }).isRequired,
};
